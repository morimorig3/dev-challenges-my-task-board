import { BoardAddCard } from "@/components/BoardAddCard";

export const CreateBoardScreen = () => {
  return (
    <div className="w-screen h-screen fixed inset-0 p-10 grid place-items-center bg-[#00000033]">
      <div className="max-w-2xl w-full">
        <BoardAddCard onClickCreate={() => {}} />
      </div>
    </div>
  );
};
