import "./App.css";
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
  return (
    <div className="mx-2 my-20 sm:mx-5 md:mx-20 xl:mx-40 2xl:mx-80 h-screen">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="bg-base-100 w-full h-full border-none rounded-lg sm:p-7 p-4 flex flex-col gap-5 transition-transform duration-300 ease-out hover:transform-[rotateX(-4deg)_rotateY(-4deg)_rotateZ(-1deg)_scale(1.02)] hover:cursor-pointer">
            <img
              src="https://avatars.githubusercontent.com/u/107088774?v=4"
              alt="Avatar"
              className="size-32 rounded-full mx-auto my-auto hover:rotate-20 transition-transform duration-800 ease-out"
            />
            <div className="mt-auto">
              <p className="text-xl font-semibold mb-2">Hi, I'm Angel!</p>
              <p>
                I'm a university student majoring in Computer Science, and an
                enjoyer of code, cats, and coffee.
              </p>
              <p className="mt-1"> Welcome to my corner of the Internet.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
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

        <div className="col-span-1 xl:row-span-4">
          <div className="bg-base-100 w-full h-full border-none rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="mt-auto">
              <p className="text-xl font-semibold mb-2">Photography</p>
              <p>Occasionally, I take pictures of interesting things.</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3 perspective-[1000px]">
          <div className="md:bg-[url('src/assets/game.png')] bg-center bg-base-100 w-full h-full border-none rounded-lg sm:p-7 p-4 flex flex-col gap-5 transition-transform duration-300 ease-out hover:transform-[rotateX(-4deg)_rotateY(-4deg)_rotateZ(-1deg)_scale(1.02)] hover:brightness-105 hover:cursor-pointer">
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

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="bg-base-100 w-full h-full border-none rounded-lg sm:p-7 p-4 flex flex-col gap-5 transition-transform duration-300 ease-out hover:transform-[rotateX(-4deg)_rotateY(-4deg)_rotateZ(-1deg)_scale(1.02)] hover:brightness-105 hover:cursor-pointer">
            <p className="text-xl font-semibold text-center">Contact Me</p>

            <div className="flex justify-center">
              <div className="flex flex-row gap-4">
                <a href="https://github.com/anqilique" target="_blank">
                  <img
                    src="https://skill-icons-web.vercel.app/skill-icons/icons/Github-Dark.svg"
                    alt="GitHub"
                    className="size-12 transition-transform duration-300 ease-out hover:scale-110 hover:rotate-[-10deg]"
                  />
                </a>

                <a href="https://www.instagram.com/anqilique/" target="_blank">
                  <img
                    src="https://skill-icons-web.vercel.app/skill-icons/icons/Instagram.svg"
                    alt="Instagram"
                    className="size-12 transition-transform duration-300 ease-out hover:scale-110 hover:rotate-[-10deg]"
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
                      className="size-12 transition-transform duration-300 ease-out hover:scale-110 hover:rotate-[-10deg]"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center flex-col">
              <button className="btn btn-soft btn-info btn-block text-lg transition-all duration-440 ease-in-out">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
