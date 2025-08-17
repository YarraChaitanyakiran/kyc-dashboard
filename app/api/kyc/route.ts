import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    totalKYC: {
      new: { count: 120, change: 12 },
      modified: { count: 45, change: -8 },
    },
    barChart: {
      today: { individual: 80, nonIndividual: 40 },
      yesterday: { individual: 60, nonIndividual: 35 },
    },
    statusCards: [
      { title: "KYC Initiated", value: 50 },
      { title: "Under Process", value: 30 },
      { title: "Registered", value: 25 },
      { title: "Validated", value: 15 },
      { title: "Hold", value: 10 },
      { title: "Docs Pending", value: 5 },
    ],
    categories: {
      individual: { RI: 70, NRI: 30 },
      nonIndividual: { RI: 40, NRI: 60 },
    },
    solicited: {
      solicited: 200,
      received: 150,
      consumed: 120,
      pending: 30,
    },
    panStats: {
      solicited: { withImage: 100, withoutImage: 50 },
      dataReceived: { withImage: 90, withoutImage: 60 },
    },
  };

  return NextResponse.json(data);
}
