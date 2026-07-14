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
  const contactModalRef = useRef<HTMLDialogElement | null>(null);
  const workModalRef = useRef<HTMLDialogElement | null>(null);

  return (
    <div className="mx-2 mb-5 sm:mx-5 md:mx-20 xl:mx-30 h-180 2xl:h-200">
      <h1 className="text-2xl text-center my-5">anqilique's desktop</h1>

      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* ABOUT CARD */}
        <div className="col-span-1 xl:row-span-3 min-h-80">
          <div className="bg-base-100 w-full h-full border-none rounded-lg sm:p-7 p-4 flex flex-col gap-5 transition-transform duration-300 ease-out hover:transform-[rotateX(-4deg)_rotateY(-4deg)_rotateZ(-1deg)_scale(1.02)] hover:cursor-pointer">
            <img
              src="https://avatars.githubusercontent.com/u/107088774?v=4"
              alt="Avatar"
              className="size-32 2xl:size-48 rounded-full mx-auto my-auto hover:rotate-20 transition-transform duration-800 ease-out"
            />
            <div className="mt-auto">
              <p className="text-xl font-semibold mb-2">Hi, I'm Angel!</p>
              <p>Welcome to my corner of the Internet. Click to explore! ✨</p>
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
          <div
            className="md:bg-[url('src/assets/game.png')] bg-center bg-base-100 w-full h-full border-none rounded-lg sm:p-7 p-4 flex flex-col gap-5 transition-transform duration-300 ease-out hover:transform-[rotateX(-1deg)_rotateY(-1deg)_rotateZ(-1deg)_scale(1.02)] hover:brightness-105 hover:cursor-pointer"
            onClick={() => workModalRef.current?.showModal()}
          >
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

            {/* work modal */}
            <dialog
              ref={workModalRef}
              id="work_modal"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box sm:w-8/12 max-w-5xl outline-none">
                <div className="flex flex-col gap-4 md:mx-10">
                  <h2 className="font-bold text-xl">My Work</h2>

                  <p className="text-lg">
                    In addition to the projects below, you can find more of my
                    work on{" "}
                    <a
                      href="https://github.com/anqilique"
                      className="link link-hover text-info"
                    >
                      GitHub
                    </a>
                    .
                  </p>

                  {/* projects */}
                  <div>
                    {/* kac */}
                    <figure className="diff aspect-video my-4 justify-center rounded-xl hover:scale-101 transition duration-200 ease-in-out">
                      <div className="diff-item-1" role="img">
                        <img
                          alt="Old KAC homepage"
                          src="src/assets/kac-old.png"
                        />
                      </div>
                      <div className="diff-item-2" role="img">
                        <img
                          alt="New KAC homepage"
                          src="src/assets/kac-home.png"
                        />
                      </div>
                      <div className="diff-resizer"></div>
                    </figure>
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row justify-between gap-2">
                        <h2>
                          <a
                            href="https://www.kiwiasianclub.com/"
                            target="_blank"
                            className="text-primary text-xl font-semibold link link-hover"
                          >
                            Kiwi Asian Club
                          </a>
                        </h2>
                        <div className="badge badge-dash badge-warning text-sm mt-1">
                          WIP
                        </div>
                      </div>
                      <h2 className="text-info text-xl italic">
                        website, 2026
                      </h2>
                    </div>
                    <p className="my-1 text-justify">
                      A membership registration and event management website
                      created by the University of Auckland Web Development and
                      Consulting Club (WDCC) for the University of Auckland Kiwi
                      Asian Club (KAC). Working as a software developer in a
                      team of 10, with a focus on frontend development tasks.
                      <span className="text-warning px-1">
                        This is an ongoing project!
                      </span>
                    </p>
                  </div>
                  <div>
                    {/* notes */}
                    <div className="flex justify-center my-4">
                      <img
                        src="src/assets/notes-app.png"
                        alt="Notes App"
                        className="h-auto object-contain rounded-xl hover:scale-101 transition duration-200 ease-in-out"
                      />
                    </div>
                    <div className="flex flex-row justify-between">
                      <h2>
                        <a
                          href="https://github.com/anqilique/Notes-App"
                          target="_blank"
                          className="text-primary text-xl font-semibold link link-hover"
                        >
                          Notes App
                        </a>
                      </h2>
                      <h2 className="text-info text-xl italic">
                        full-stack app, 2026
                      </h2>
                    </div>
                    <p className="my-1 text-justify">
                      A full-stack notes app built using the MERN stack
                      (MongoDB, Express, React, Node). Notes contain a basic
                      title and content section, and the app includes basic
                      functionality such as editing, creating, and deleting
                      notes. This was mainly a learning project that served as
                      an introduction to the MERN stack.
                    </p>
                  </div>
                  <div>
                    {/* crowd */}
                    <div className="flex justify-center my-4">
                      <img
                        src="src/assets/crowd.png"
                        alt="crowd Game"
                        className="h-auto object-contain rounded-xl hover:scale-101 transition duration-200 ease-in-out"
                      />
                    </div>
                    <div className="flex flex-row justify-between">
                      <h2>
                        <a
                          href="https://anqilique.itch.io/crowd"
                          target="_blank"
                          className="text-primary text-xl font-semibold link link-hover"
                        >
                          crowd
                        </a>
                      </h2>
                      <h2 className="text-info text-xl italic">
                        2D mini-game, 2026
                      </h2>
                    </div>
                    <p className="my-1 text-justify">
                      Be a tiny person in the crowd, match colours and score
                      points in this mouse-only mini-game. Created using the
                      Godot Game Engine with the aim of achieving quality over
                      quantity in terms of UI/UX design.
                    </p>
                  </div>
                  <div>
                    {/* cats */}
                    <div className="flex justify-center my-4">
                      <img
                        src="src/assets/cats.png"
                        alt="Unnamed Cats Game"
                        className="h-auto object-contain rounded-xl hover:scale-101 transition duration-200 ease-in-out"
                      />
                    </div>
                    <div className="flex flex-row justify-between">
                      <h2>
                        <a
                          href="https://anqilique.itch.io/unnamed-cats-game"
                          target="_blank"
                          className="text-primary text-xl font-semibold link link-hover"
                        >
                          Unnamed Cats Game
                        </a>
                      </h2>
                      <h2 className="text-info text-xl italic">
                        2-player co-op game, 2025
                      </h2>
                    </div>
                    <p className="my-1 text-justify">
                      Submission for UoA GDG Jam 2, 2025, under the theme: "Pass
                      the Torch". A 2-player co-op game, play as two cats with
                      different roles and find the key to escape as fast as
                      possible. Pass the torch between each other and stay
                      alive! Built using the Godot Game Engine.
                    </p>
                  </div>
                  <p className="pt-4 mt-auto text-info">
                    Press <kbd className="kbd kbd-md text-info">ESC</kbd> or
                    click outside to close.
                  </p>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop backdrop-blur-xs">
                <button>Close Modal</button>
              </form>
            </dialog>
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
                onClick={() => contactModalRef.current?.showModal()}
              >
                See More
              </button>

              {/* other platforms modal */}
              <dialog
                ref={contactModalRef}
                id="contacts_modal"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box sm:w-8/12 max-w-5xl outline-none">
                  <div className="md:mx-10">
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
                        <button className="btn btn-primary btn-dash btn-block btn-lg xl:btn-xl">
                          Discord (@anqilique)
                        </button>
                      </a>
                    </div>

                    <p className="pt-4 mt-auto text-info">
                      Press <kbd className="kbd kbd-md text-info">ESC</kbd> or
                      click outside to close.
                    </p>
                  </div>
                </div>
                <form
                  method="dialog"
                  className="modal-backdrop backdrop-blur-xs"
                >
                  <button>Close Modal</button>
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
