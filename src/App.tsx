import "./App.css";
import { useRef } from "react";
import OrbitImages from "../components/OrbitImages.tsx";

const images = [
  "https://skill-icons-web.vercel.app/skill-icons/icons/Godot-Dark.svg",
  "https://skill-icons-web.vercel.app/skill-icons/icons/HTML.svg",
  "https://skill-icons-web.vercel.app/skill-icons/icons/CSS.svg",
  "https://skill-icons-web.vercel.app/skill-icons/icons/React-Dark.svg",
  "https://skill-icons-web.vercel.app/skill-icons/icons/TypeScript.svg",
  "https://skill-icons-web.vercel.app/skill-icons/icons/Java-Dark.svg",
  "https://skill-icons-web.vercel.app/skill-icons/icons/Python-Dark.svg",
];

function App() {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  return (
    <div className="mx-2 mb-5 sm:mx-5 md:mx-20 xl:mx-30 h-180 2xl:h-200">
      <h1 className="text-2xl text-center my-5">anqilique's desktop</h1>

      {/* ABOUT CARD */}
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3 min-h-80">
          <div className="bg-base-100 w-full h-full border-none rounded-lg sm:p-7 p-4 flex flex-col gap-5 transition-transform duration-300 ease-out hover:transform-[rotateX(-4deg)_rotateY(-4deg)_rotateZ(-1deg)_scale(1.02)] hover:cursor-pointer">
            <img
              src="https://avatars.githubusercontent.com/u/107088774?v=4"
              alt="Avatar"
              className="size-32 2xl:size-48 rounded-full mx-auto my-auto hover:rotate-20 transition-transform duration-800 ease-out"
            />
            <div className="mt-auto">
              <p className="text-xl font-semibold mb-2">Hi, I'm Angel!</p>
              <p>
                I'm a university student majoring in Computer Science, and an
                enjoyer of code, cats, and coffee.
              </p>
            </div>
          </div>
        </div>

        {/* SKILLS CARD */}
        <div className="col-span-1 xl:row-span-3 min-h-80">
          <div className="bg-base-100 w-full h-full border-none rounded-lg sm:p-7 p-4 flex flex-col gap-5 transition-transform duration-300 ease-out hover:transform-[rotateX(-4deg)_rotateY(-4deg)_rotateZ(-1deg)_scale(1.02)] hover:cursor-pointer">
            <div className="w-full max-h-fit min-h-0 rounded-lg flex justify-center hover:rotate-10 transition-transform duration-300 ease-out">
              <OrbitImages
                images={images}
                shape="ellipse"
                radiusX={220}
                radiusY={380}
                rotation={-86}
                duration={30}
                itemSize={200}
                responsive={true}
                radius={240}
                direction="reverse"
                fill
                showPath={false}
                paused={false}
              />
            </div>

            <div className="mt-auto">
              <p className="text-xl font-semibold mb-2">Skills and Tools</p>
              <p>
                Lately, I've been interested in game and web development, with a
                focus on learning React.
              </p>
            </div>
          </div>
        </div>

        {/* PHOTOS CARD */}
        <div className="col-span-1 xl:row-span-4 min-h-80">
          <div className="bg-[url('src/assets/ramen.jpeg')] bg-center w-full h-full border-none rounded-lg sm:p-7 p-4 flex flex-col gap-5 transition-transform duration-300 ease-out hover:transform-[rotateX(-4deg)_rotateY(-4deg)_rotateZ(-1deg)_scale(1.02)] hover:brightness-105 hover:cursor-pointer">
            <div className="mt-auto">
              <p className="text-xl font-semibold mb-2">Photography</p>
              <p>Occasionally, I take pictures of interesting things.</p>
            </div>
          </div>
        </div>

        {/* WORK CARD */}
        <div className="xl:col-span-2 xl:row-span-3 perspective-[1000px]">
          <div className="md:bg-[url('src/assets/game.png')] bg-center bg-base-100 w-full h-full border-none rounded-lg sm:p-7 p-4 flex flex-col gap-5 transition-transform duration-300 ease-out hover:transform-[rotateX(-1deg)_rotateY(-1deg)_rotateZ(-1deg)_scale(1.02)] hover:brightness-105 hover:cursor-pointer">
            <div className="w-full flex-1 min-h-0 overflow-hidden rounded-lg flex justify-center md:hidden">
              <img
                src="src/assets/work-grid.png"
                alt="My Work"
                className="h-full object-contain rounded-lg"
              />
            </div>
            <div className="mt-auto brightness-110">
              <p className="text-xl font-semibold mb-2">My Work</p>
              <p className="">See what I've been up to?</p>
            </div>
          </div>
        </div>

        {/* CONTACT CARD */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="bg-base-100 w-full h-full border-none rounded-lg sm:p-7 p-4 flex flex-col gap-5 transition-transform duration-300 ease-out hover:transform-[rotateX(-4deg)_rotateY(-4deg)_rotateZ(-1deg)_scale(1.02)] hover:brightness-105">
            <p className="text-xl font-semibold text-center">Contact Me</p>

            {/* main icons */}
            <div className="flex justify-center">
              <div className="flex flex-row gap-4">
                <a href="https://github.com/anqilique" target="_blank">
                  <img
                    src="https://skill-icons-web.vercel.app/skill-icons/icons/Github-Dark.svg"
                    alt="GitHub"
                    className="size-16 2xl:size-14 transition-transform duration-300 ease-out hover:scale-110 hover:rotate-[-10deg]"
                  />
                </a>

                <a href="https://www.instagram.com/anqilique/" target="_blank">
                  <img
                    src="https://skill-icons-web.vercel.app/skill-icons/icons/Instagram.svg"
                    alt="Instagram"
                    className="size-16 2xl:size-14 transition-transform duration-300 ease-out hover:scale-110 hover:rotate-[-10deg]"
                  />
                </a>
                <div
                  className="lg:tooltip lg:tooltip-bottom tooltip-info"
                  data-tip="angelbhulot@gmail.com"
                >
                  <a href="mailto:angelbhulot@gmail.com">
                    <img
                      src="https://skill-icons-web.vercel.app/skill-icons/icons/Gmail-Dark.svg"
                      alt="Gmail"
                      className="size-16 2xl:size-14 transition-transform duration-300 ease-out hover:scale-110 hover:rotate-[-10deg]"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center flex-col 2xl:mt-auto">
              <button
                className="btn btn-soft btn-info btn-block text-lg transition-all duration-440 ease-in-out"
                onClick={() => modalRef.current?.showModal()}
              >
                See More
              </button>

              {/* other platforms modal */}
              <dialog
                ref={modalRef}
                id="contacts_modal"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box sm:w-10/12 max-w-5xl">
                  <h2 className="font-bold text-xl">Platforms</h2>
                  <br />

                  <div className="flex flex-col gap-6">
                    <a
                      href="https://www.codingame.com/profile/fd1e2576f7372ec6a889887a916abb9b3415326"
                      target="_blank"
                    >
                      <button className="btn btn-warning btn-dash btn-block btn-lg xl:btn-xl">
                        CodinGame Profile
                      </button>
                    </a>
                    <a href="https://anqilique.itch.io/" target="_blank">
                      <button className="btn btn-error btn-dash btn-block btn-lg xl:btn-xl">
                        Itch.io Page
                      </button>
                    </a>
                    <a
                      href="https://www.focumon.com/focus_with/anqilique"
                      target="_blank"
                    >
                      <button className="btn btn-success btn-dash btn-block btn-lg xl:btn-xl">
                        Focumon
                      </button>
                    </a>
                    <a href="https://discord.com/" target="_blank">
                      <button className="btn btn-info btn-dash btn-block btn-lg xl:btn-xl">
                        Discord (@anqilique)
                      </button>
                    </a>
                  </div>

                  <p className="pt-4 mt-auto">
                    Press <kbd className="kbd kbd-md">ESC</kbd> or click outside
                    to close.
                  </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>Close Contacts</button>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default App;
