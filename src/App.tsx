import "./App.css";

function App() {
  return (
    <div className="mx-2 my-20 sm:mx-5 md:mx-20 xl:mx-40">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="bg-base-100 w-full h-full border-none rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div>
              <p className="text-xl font-semibold mb-2">Hi, I'm Angel!</p>
              <p>
                I'm a university student majoring in Computer Science, and an
                enjoyer of code, cats, and coffee. Welcome to my corner of the
                Internet.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="bg-base-100 w-full h-full border-none rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div>
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
            <div>
              <p className="text-xl font-semibold mb-2">Photography</p>
              <p>Occasionally, I take pictures of interesting things.</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="bg-base-100 w-full h-full border-none rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div>
              <p className="text-xl font-semibold mb-2">My Work</p>
              <p>See what I've been up to?</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="bg-base-100 w-full h-full border-none rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="space-y-2">
              <p className="text-xl font-semibold mb-2">Contact Me</p>
              <p>I exist on these platforms also.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
