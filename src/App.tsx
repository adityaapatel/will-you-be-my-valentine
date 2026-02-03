import { useState } from "react";

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const yesButtonSize = noCount * 20 + 16;

  const phrases = [
    "No",
    "Are you sure?",
    "What if I asked really nicely darling?",
    "Pretty please",
    "With a chocolate rice cake on top",
    "What about a strawberry matcha bebu???",
    "PLEASE MY BABYYYYY",
    "But :*(",
    "I am going to die",
    "Yep im dead",
    "ok ur talking to aadi's ghost",
    "please babe",
    ":((((",
    "PRETTY PLEASE",
    "Estoy muerto",
    "No :(",
  ];

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="bear kiss"
          />
          <div className="my-4 text-4xl font-bold">
            WOOOOOO!!! I love you vanlu!! ;))
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="bear roses"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>

          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            <button
              onClick={() => setNoCount((c) => c + 1)}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {phrases[Math.min(noCount, phrases.length - 1)]}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
