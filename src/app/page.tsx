import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#0F0D13]">
      <div className="flex gap-8">
        <div className="flex flex-col rounded-lg p-10 bg-[#2A2141] gap-4 py-14">
          <Image src="/images/preView.svg" alt="" width={191} height={191} />

          <div className="pt-3">
            <h3 className="text-2xl font-semibold">Acorda Devinho</h3>
            <span className="text-[#E1E1E6] text-lg opacity-70">
              Banda Rocketseat
            </span>
          </div>
          <div className="flex items-center justify-around pt-3">
            <Image src="/images/play-back.svg" alt="" width={30} height={30} />
            <Image src="/images/play.svg" alt="" width={30} height={30} />
            <Image
              src="/images/play-forward.svg"
              alt=""
              width={30}
              height={30}
            />
          </div>
          <div className="flex flex-col gap-2 pt-3">
            <div className="relative h-[6px] w-full bg-[#D9D9D9] bg-opacity-30 rounded-md">
              <div className="absolute h-[6px] w-5/6 bg-white rounded-md"></div>
            </div>
            <div className="flex w-full justify-between text-[#C4C4CC] opacity-70 text-sm">
              <span>03:20</span>
              <span>00:12</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col rounded-lg p-10 bg-[#2A2141] gap-4 py-7  h-fit">
            <div className="flex gap-7">
              <Image src="/images/preView.svg" alt="" width={85} height={85} />
              <div className="pt-3">
                <h3 className="text-2xl font-semibold">Acorda Devinho</h3>
                <span className="text-[#E1E1E6] text-lg opacity-70">
                  Banda Rocketseat
                </span>
              </div>
            </div>
            <div className="flex items-center justify-around pt-3 px-12">
              <Image
                src="/images/play-back.svg"
                alt=""
                width={30}
                height={30}
              />
              <Image src="/images/play.svg" alt="" width={30} height={30} />
              <Image
                src="/images/play-forward.svg"
                alt=""
                width={30}
                height={30}
              />
            </div>
            <div className="flex flex-col gap-2 pt-3">
              <div className="relative h-[6px] w-full bg-[#D9D9D9] bg-opacity-30 rounded-md">
                <div className="absolute h-[6px] w-5/6 bg-white rounded-md"></div>
              </div>
              <div className="flex w-full justify-between text-[#C4C4CC] opacity-70 text-sm">
                <span>03:20</span>
                <span>00:12</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg p-10 bg-[#2A2141] gap-4 justify-center h-full">
            <div className="flex gap-7">
              <Image src="/images/preView.svg" alt="" width={85} height={85} />
              <div className="pt-3">
                <h3 className="text-2xl font-semibold">Acorda Devinho</h3>
                <span className="text-[#E1E1E6] text-lg opacity-70">
                  Banda Rocketseat
                </span>
              </div>
            </div>
            <div className="flex items-center justify-around pt-3 px-12">
              <Image
                src="/images/play-back.svg"
                alt=""
                width={30}
                height={30}
              />
              <Image src="/images/play.svg" alt="" width={30} height={30} />
              <Image
                src="/images/play-forward.svg"
                alt=""
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
