"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import VirtualTour, { type VirtualTourConfig } from "./panorama/VirtualTour";

const TOUR_HFOV = 120;

const SCENE_IMAGES: Record<string, string> = {
  entrance: "/images/entrance.jpg",
  "corridor-1": "/images/corridor-1.jpg",
  "bathroom-1": "/images/bathroom-1.jpg",
  "bathroom-2": "/images/bathroom-2.jpg",
  "corridor-2": "/images/corridor-2.jpg",
  "kitchen-1": "/images/kitchen-1.jpg",
  "kitchen-2": "/images/kitchen-2.jpg",
  "corridor-3": "/images/corridor-3.jpg",
  "bedroom-1": "/images/bedroom-1.jpg",
  "corridor-4": "/images/corridor-4.jpg",
  "living-1": "/images/living-1.jpg",
  "living-2": "/images/living-2.jpg",
  balcony: "/images/balcony.jpg",
};

const FORWARD_LINKS: Record<string, string[]> = {
  entrance: ["corridor-1"],
  "corridor-1": ["bathroom-1", "corridor-2"],
  "bathroom-1": ["bathroom-2"],
  "bathroom-2": [],
  "corridor-2": ["kitchen-1", "corridor-3"],
  "kitchen-1": ["kitchen-2"],
  "kitchen-2": [],
  "corridor-3": ["bedroom-1", "corridor-4"],
  "bedroom-1": [],
  "corridor-4": ["living-1"],
  "living-1": ["living-2"],
  "living-2": ["balcony"],
  balcony: [],
};

type HotspotPlacement = {
  yaw: number;
  pitch: number;
  targetYaw?: number;
  targetPitch?: number;
};

const HOTSPOT_OVERRIDES: Record<string, HotspotPlacement> = {
  "entrance->corridor-1": { yaw: 180, pitch: -20, targetYaw: -121 },
  "corridor-1->entrance": { yaw: 8, pitch: -20, targetYaw: 180, targetPitch: 7 },
  "corridor-1->bathroom-1": { yaw: -80, pitch: -20, targetYaw: -99, targetPitch: -2 },
  "bathroom-1->corridor-1": { yaw: 91, pitch: -20, targetYaw: -120, targetPitch: -2 },
  "corridor-1->corridor-2": { yaw: -173, pitch: -20, targetYaw: -127, targetPitch: -2 },
  "corridor-2->corridor-1": { yaw: 5, pitch: -20, targetYaw: 0, targetPitch: -2 },
  "bathroom-1->bathroom-2": { yaw: -90, pitch: -20, targetYaw: 50, targetPitch: -2 },
  "bathroom-2->bathroom-1": { yaw: 78, pitch: -20, targetYaw: 76, targetPitch: -2 },
  "corridor-2->kitchen-1": { yaw: -80, pitch: -20, targetYaw: -80, targetPitch: -2 },
  "kitchen-1->corridor-2": { yaw: 92, pitch: -20, targetYaw: -20, targetPitch: -2 },
  "corridor-2->corridor-3": { yaw: -170, pitch: -20, targetYaw: 175, targetPitch: -2 },
  "corridor-3->corridor-2": { yaw: -8, pitch: -20, targetYaw: -5, targetPitch: -2 },
  "kitchen-1->kitchen-2": { yaw: -92, pitch: -20, targetYaw: 180, targetPitch: -2 },
  "kitchen-2->kitchen-1": { yaw: 83, pitch: -20, targetYaw: 59, targetPitch: -2 },
  "corridor-3->bedroom-1": { yaw: -95, pitch: -20, targetYaw: 130, targetPitch: -2 },
  "bedroom-1->corridor-3": { yaw: 68, pitch: -20, targetYaw: -133, targetPitch: -2 },
  "corridor-3->corridor-4": { yaw: 173, pitch: -20, targetYaw: -158, targetPitch: -2 },
  "corridor-4->corridor-3": { yaw: 0, pitch: -20, targetYaw: -38, targetPitch: -2 },
  "corridor-4->living-1": { yaw: -159, pitch: -20, targetYaw: -49, targetPitch: -2 },
  "living-1->corridor-4": { yaw: 15, pitch: -20, targetYaw: -20, targetPitch: -2 },
  "living-1->living-2": { yaw: -70, pitch: -20, targetYaw: -63, targetPitch: -2 },
  "living-2->living-1": { yaw: 73, pitch: -20, targetYaw: 0, targetPitch: -2 },
  "living-2->balcony": { yaw: -114, pitch: -20, targetYaw: 61, targetPitch: -2 },
  "balcony->living-2": { yaw: 52, pitch: -20, targetYaw: 0, targetPitch: -2 },
};

function buildBidirectionalLinks(links: Record<string, string[]>) {
  const adjacency: Record<string, Set<string>> = Object.fromEntries(
    Object.keys(SCENE_IMAGES).map((sceneId) => [sceneId, new Set<string>()])
  );

  Object.entries(links).forEach(([from, targets]) => {
    targets.forEach((to) => {
      adjacency[from].add(to);
      adjacency[to].add(from);
    });
  });

  return Object.fromEntries(
    Object.entries(adjacency).map(([sceneId, targets]) => [sceneId, [...targets]])
  );
}

function createHotspots(
  fromSceneId: string,
  targets: string[],
  sceneTitles: Record<string, string>
) {
  if (targets.length === 0) return [];

  if (targets.length === 1) {
    const onlyTarget = targets[0];
    const placement = HOTSPOT_OVERRIDES[`${fromSceneId}->${onlyTarget}`];
    return [
      {
        pitch: placement?.pitch ?? -8,
        yaw: placement?.yaw ?? 20,
        type: "scene" as const,
        text: `Go to ${sceneTitles[onlyTarget]}`,
        sceneId: onlyTarget,
        targetYaw: placement?.targetYaw,
        targetPitch: placement?.targetPitch,
      },
    ];
  }

  return targets.map((sceneId, index) => {
    const step = 70 / (targets.length - 1);
    const yaw = -35 + step * index;
    const placement = HOTSPOT_OVERRIDES[`${fromSceneId}->${sceneId}`];
    return {
      pitch: placement?.pitch ?? -8,
      yaw: placement?.yaw ?? yaw,
      type: "scene" as const,
      text: `Go to ${sceneTitles[sceneId]}`,
      sceneId,
      targetYaw: placement?.targetYaw,
      targetPitch: placement?.targetPitch,
    };
  });
}

const SCENE_LINKS = buildBidirectionalLinks(FORWARD_LINKS);

export default function WalkableTour() {
  const t = useTranslations();

  const sceneTitles = useMemo<Record<string, string>>(
    () => ({
      entrance: t("walkableTour.scenes.entrance"),
      "corridor-1": t("walkableTour.scenes.corridor1"),
      "bathroom-1": t("walkableTour.scenes.bathroom1"),
      "bathroom-2": t("walkableTour.scenes.bathroom2"),
      "corridor-2": t("walkableTour.scenes.corridor2"),
      "kitchen-1": t("walkableTour.scenes.kitchen1"),
      "kitchen-2": t("walkableTour.scenes.kitchen2"),
      "corridor-3": t("walkableTour.scenes.corridor3"),
      "bedroom-1": t("walkableTour.scenes.bedroom1"),
      "corridor-4": t("walkableTour.scenes.corridor4"),
      "living-1": t("walkableTour.scenes.living1"),
      "living-2": t("walkableTour.scenes.living2"),
      balcony: t("walkableTour.scenes.balcony"),
    }),
    [t]
  );

  const config = useMemo<VirtualTourConfig>(
    () => ({
      firstScene: "entrance",
      sceneFadeDuration: 1000,
      author: "Casa das Mandalas",
      scenes: Object.fromEntries(
        Object.entries(SCENE_IMAGES).map(([sceneId, panorama]) => [
          sceneId,
          {
            id: sceneId,
            title: sceneTitles[sceneId],
            panorama,
            yaw: sceneId === "entrance" ? 180 : 0,
            pitch: 0,
            hfov: TOUR_HFOV,
            hotSpots: createHotspots(sceneId, SCENE_LINKS[sceneId] ?? [], sceneTitles),
          },
        ])
      ),
    }),
    [sceneTitles]
  );

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
          {t("walkableTour.title")}
        </h2>
        <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          {t("walkableTour.description")}
        </p>

        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-900">
          <VirtualTour config={config} height={560} />
        </div>
      </div>
    </section>
  );
}
