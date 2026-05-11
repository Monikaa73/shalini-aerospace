import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";
import { Particles } from "@/components/Particles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shalini Kumar — Aerospace Engineer Portfolio" },
      { name: "description", content: "Portfolio of Shalini Kumar, Aerospace Engineer specializing in UAVs, CAD modeling, and aerospace innovation." },
      { property: "og:title", content: "Shalini Kumar — Aerospace Engineer" },
      { property: "og:description", content: "UAV, CubeSat, and aerospace design portfolio." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Particles />
      <Portfolio />
    </>
  );
}
