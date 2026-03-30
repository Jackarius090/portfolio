import { ImageResponse } from "next/og";

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Jack Dickinson";

  return new ImageResponse(
    (
      <div tw="flex h-full w-full items-center justify-center bg-[#f7f5f0] px-16">
        <div tw="flex w-full flex-col rounded-[32px] border border-[#d6d3d1] bg-white px-12 py-14">
          <p tw="text-[20px] uppercase tracking-[0.4em] text-[#78716c]">
            Portfolio
          </p>
          <h2 tw="mt-6 flex flex-col text-6xl font-bold tracking-tight text-left text-[#0f172a]">
            {title}
          </h2>
          <p tw="mt-6 text-2xl text-[#57534e]">
            Projects built with React and Next.js
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
