"use client";
import { InView } from "../components/ui/in-view";
import { motion } from "framer-motion";

export function InViewImagesGrid() {
  return (
    <div
      id="images"
      className="h-full w-full overflow-auto relative bg-white dark:bg-neutral-950"
    >
      <div className="mb-20 text-center text-sm flex flex-col items-center">
        Scroll down
        <img
          src="/scroll-down.svg"
          alt="Scroll down"
          className="mt-2 inline h-6 animate-bounce dark:invert"
        />
      </div>
      <div className="flex h-full items-end justify-center pb-12">
        <InView
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <div className="columns-2 gap-4 px-8 sm:columns-3">
            {[
              "https://cdn.cosmos.so/a7c9250f-8d96-4771-9947-247e762bef79?format=jpeg",
              "https://cdn.cosmos.so/6df9e732-04c9-4307-9985-b29c1eac120b?format=jpeg",
              "https://cdn.cosmos.so/e12f553f-6232-421f-95a8-e4a237ae2d7c?format=jpeg",
              "https://cdn.cosmos.so/463c46b0-2e0c-45a1-9084-0aaafa259628?format=jpeg",
              "https://cdn.cosmos.so/74f75e29-c2e5-43dd-ab44-2b9707065553?format=jpeg",
              "https://images.beta.cosmos.so/e5ebb6f8-8202-40ec-bc70-976f81153501?format=jpeg",
              "https://cdn.cosmos.so/7ef6f10e-10cb-4513-804b-7cd0cfa492c7?format=jpeg",
              "https://images.beta.cosmos.so/1b6f1bee-1b4c-4035-9e93-c93ef4d445e1?format=jpeg",
              "https://cdn.cosmos.so/6395e332-4963-4c70-a2f1-f09fd920201a?format=jpeg",
              "https://images.beta.cosmos.so/9968a6cf-d7f6-4ec9-a56d-ac4eef3f8689?format=jpeg",
              "https://images.beta.cosmos.so/4b88a39c-c657-4911-b843-b473237e83b5?format=jpeg",
              "https://cdn.cosmos.so/bed0033f-b021-47a9-be4a-702ba4b64947?format=jpeg",
              "https://images.beta.cosmos.so/86af92c0-064d-4801-b7ed-232535b03328?format=jpeg",
              "https://images.beta.cosmos.so/399e2a4a-e118-4aaf-9c7e-155ed18f6556?format=jpeg",
              "https://cdn.cosmos.so/70718b44-0518-413e-8d36-27413653a358?format=jpeg",
              "https://cdn.cosmos.so/eef8d70c-d3ba-4e42-85c8-e3eb33a44a56?format=jpeg",
              "https://cdn.cosmos.so/ef1b7120-655b-4f45-a7e2-aa1c9dfe9f07?format=jpeg",
              "https://images.beta.cosmos.so/6ff16bc9-dc94-4549-a057-673a603ce203?format=jpeg",
              "https://cdn.cosmos.so/72b28be6-530a-4b6c-b511-692508b58faa?format=jpeg",
              "https://images.beta.cosmos.so/d67c3185-4480-4408-8f9d-1cbf541e5d91?format=jpeg",
              "https://cdn.cosmos.so/6cbf5eb1-c67e-48fb-9d63-0094a925504c?format=jpeg",
              "https://images.beta.cosmos.so/a7b19274-3370-4080-b734-e8ac268d8c8e.?format=jpeg",
              "https://cdn.cosmos.so/c68e3b29-a239-4e92-8868-d188f6b9b94a?format=jpeg",
              "https://images.beta.cosmos.so/551daf0d-77e8-472c-9324-468fed15a0ba?format=jpeg",
              "https://cdn.cosmos.so/0d70b853-236e-4cb5-81dc-e8210caa1100?format=jpeg",
              "https://cdn.cosmos.so/0f4f329f-bf51-4def-b544-44ab1afa6c8f?format=jpeg",
              "https://cdn.cosmos.so/7f647951-8735-440c-9043-8f21bc79b46e?format=jpeg",
              "https://cdn.cosmos.so/96535d6e-166a-4781-8580-d477cc22453c?format=jpeg",
              "https://cdn.cosmos.so/a29df2d9-59f7-4c98-b621-cc1b35bbb94b?format=jpeg",
              "https://cdn.cosmos.so/2a585799-356f-41b9-ad54-a460737dcfd6?format=jpeg",
              "https://cdn.cosmos.so/fdf49061-0242-4c43-a7d0-71c47dd37190.?format=jpeg",
              "https://cdn.cosmos.so/9fdb3a39-ccc5-4a98-aa40-910bc358b9d7?format=jpeg",
              "https://cdn.cosmos.so/8d73b101-d1fa-4ed4-b163-52cc011a39ef?format=jpeg",
              "https://cdn.cosmos.so/84f697ef-193a-4e3d-9253-a8cc6cc91eb7?format=jpeg",
              "https://cdn.cosmos.so/6ae521ff-da98-4a73-9140-f809b8f94594?format=jpeg",
              "https://cdn.cosmos.so/536fc0cf-b754-4f43-a07b-ef7e4db44f1a.?format=jpeg",
              "https://cdn.cosmos.so/bc112ff6-39a2-4dd7-addd-f8de71b87398?format=jpeg",
              "https://cdn.cosmos.so/e0b8e485-6c24-468f-a195-3c459e6d574b?format=jpeg",
            ].map((imgSrc, index) => {
              return (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                    },
                  }}
                  key={index}
                  className="mb-4"
                >
                  <picture>
                    <img
                      src={imgSrc}
                      alt={`Image placeholder from cosmos.so, index:${index}`}
                      className="size-full rounded-lg object-contain"
                      loading="lazy"
                      width={100}
                      height={100}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </picture>
                </motion.div>
              );
            })}
          </div>
        </InView>
      </div>
    </div>
  );
}
