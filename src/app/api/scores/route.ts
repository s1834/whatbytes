import DBInstance from "@/utils/db/server";
import { NextResponse } from "next/server";
import Scores from "@/utils/models/scores.models";

DBInstance();

// export async function GET(req: Request) {
//   try {
//     const scoresData = await Scores.find();

//     if (scoresData.length > 0) {
//       return NextResponse.json({
//         message: "GET Success",
//         data: scoresData,
//       });
//     } else {
//       return NextResponse.json({ message: "No Scores found" }, { status: 404 });
//     }
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(req: Request) {
//   try {
//     // Extract the 'id' from the URL query parameters
//     const { searchParams } = new URL(req.url);
//     const id = searchParams.get("id"); // Assuming the ID is passed as a query parameter, e.g., ?id=6750ae3e829475fbb6fc2e68

//     if (!id) {
//       return NextResponse.json(
//         { message: "ID parameter is required" },
//         { status: 400 }
//       );
//     }

//     const scoreData = await Scores.findById(id);

//     if (scoreData) {
//       return NextResponse.json({
//         message: "GET Success",
//         data: scoreData,
//       });
//     } else {
//       return NextResponse.json({ message: "Score not found" }, { status: 404 });
//     }
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      // Fetch by ID
      const scoreData = await Scores.findById(id);

      if (scoreData) {
        return NextResponse.json({
          message: "GET Success",
          data: scoreData,
        });
      } else {
        return NextResponse.json(
          { message: "Score not found" },
          { status: 404 }
        );
      }
    } else {
      // Fetch all scores
      const scoresData = await Scores.find();

      if (scoresData.length > 0) {
        return NextResponse.json({
          message: "GET Success",
          data: scoresData,
        });
      } else {
        return NextResponse.json(
          { message: "No Scores found" },
          { status: 404 }
        );
      }
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, rank, percentile, currentScore } = body;

    if (!id || !rank || !percentile || typeof currentScore !== "number") {
      return NextResponse.json(
        { message: "Invalid or missing fields" },
        { status: 400 }
      );
    }

    const updatedScore = await Scores.findByIdAndUpdate(
      id,
      { rank, percentile, currentScore },
      { new: true, overwrite: true, runValidators: true }
    );

    if (!updatedScore) {
      return NextResponse.json({ message: "Score not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Score updated successfully",
      data: updatedScore,
    });
  } catch (err) {
    console.error(err);
    const errorMessage = (err as Error)?.message || "An unknown error occurred";
    return NextResponse.json(
      { message: "Failed to update score", error: errorMessage },
      { status: 400 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!Array.isArray(body)) {
      throw new Error("Invalid input: expected an array of scores.");
    }

    const newScores = body.map((score) => {
      return new Scores({
        rank: score.rank,
        percentile: score.percentile,
        currentScore: score.currentScore,
      });
    });

    const savedScores = await Scores.insertMany(newScores);

    return NextResponse.json(
      { message: "Scores created successfully", data: savedScores },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    const errorMessage = (err as Error)?.message || "An unknown error occurred";
    return NextResponse.json(
      { message: "Failed to create scores", error: errorMessage },
      { status: 400 }
    );
  }
}
