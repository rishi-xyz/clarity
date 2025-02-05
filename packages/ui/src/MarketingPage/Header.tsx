import { Button } from "../components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg overflow-x-clip">
        <div className="container inset-0 outline outline-4 outline-offset-8 outline-fuchsia-500/30 rounded-lg p-2">
            <div className="flex items-center justify-between mt-3 mx-5 ">
                <div>
                    <h2 className="text-3xl md:text-4xl md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,#d946ef,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center ml-1 md:ml-5'">
                        Clarity
                    </h2>
                </div>
                <div>
                    <Button variant={"fushia"}>Dashboard</Button>
                </div>
            </div>
        </div>
    </header>
  );
};
