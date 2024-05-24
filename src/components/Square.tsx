// type Player = "X" | "O" | null;

// type Props = {
//   winner: Player;
//   value: Player;
//   onClick: () => void;
// };

// const Square = ({ winner, value, onClick }: Props) => {
//   if (!value) {
//     return <button className="square w-100 h-100 text-5xl bg-white border border-solid border-black border-1" onClick={onClick} disabled={Boolean(winner)} />;
//   }
//   return (
//     <button
//   className={
//     value === "O"
//       ? `square w-100 h-100 text-5xl border border-solid border-black border-1 bg-green`
//       : `square w-100 h-100 text-5xl border border-solid border-black border-1 bg-crimson`
//   }
//     >
//       This is a Square
//     </button>
//   );
// };

// export default Square;

// type Player = "X" | "O" | "BOTH" | null;

// function Square({
//   value,
//   onClick,
//   winner,
// }: {
//   winner: Player;
//   value: Player;
//   onClick: () => void;
// }) {
//   if (!value) {
//     return (
//       <button
//         className="square w-100 h-100 text-5xl bg-white border border-solid border-black border-1"
//         onClick={onClick}
//         disabled={Boolean(winner)}
//       />
//     );
//   }
//   return (
//     <button
//       className={
//         value === "O"
//           ? `square w-100 h-100 text-5xl border border-solid border-black border-1 bg-green`
//           : `square w-100 h-100 text-5xl border border-solid border-black border-1 bg-crimson`
//       }
//       disabled
//     >
//       {value}
//     </button>
//   );
// }

// export default Square;

type Player = "X" | "O" | "BOTH" | null;

function Square({
  value,
  onClick,
  winner,
}: {
  winner: Player;
  value: Player;
  onClick: () => void;
}) {
  if (!value) {
    return (
      <button
        className="w-24 h-24 text-[5rem] text-[#e8e5e5] border-[solid] border-[1px] border-[black] flex justify-center items-center"
        onClick={onClick}
        disabled={Boolean(winner)}
      />
    );
  }
  return (
      <button
        className={`w-24 h-24 text-[5rem] text-[#e8e5e5] border border-solid border-1 border-black flex justify-center items-center ${value=="O"?"bg-green-500":"bg-red-500"}`}
        disabled
      >
        {value}
      </button>
    );
  // if (value === "O") {
    // return (
    //   <button
    //     className="w-24 h-24 text-[5rem] text-[#e8e5e5] border-solid border-1 border-black bg-green-500 flex justify-center items-center"
    //     disabled
    //   >
    //     {value}
    //   </button>
    // );
  // }
  // if (value === "X") {
  //   return (
  //     <button
  //       className="bg-red-500 w-24 h-24 text-[5rem] text-[#e8e5e5] border border-solid border-1 border-black flex justify-center items-center"
  //       disabled
  //     >
  //       {value}
  //     </button>
  //   );
  // }
}

export default Square;
