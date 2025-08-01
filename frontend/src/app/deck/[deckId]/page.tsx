"use client";
import { useParams } from "next/navigation";
import DeckDetail from "@/components/DeckDetail";
import React from "react";

export default function DeckDetailPage() {
  const params = useParams();
  const deckId =
    params && typeof params.deckId === "string"
      ? params.deckId
      : params && Array.isArray(params.deckId)
      ? params.deckId[0]
      : "";
  return (
    <div className="min-h-screen">
      <div className="mx-auto p-8 mt-12 bg-black rounded-xl border border-mtg-blue relative">
        <DeckDetail deckId={deckId} />
      </div>
    </div>
  );
}
