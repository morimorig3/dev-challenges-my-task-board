import { createBoard } from "@/api/board";
import { BoardAddCard } from "@/components/BoardAddCard";
import { useNavigate } from "react-router";

export const CreateBoardScreen = () => {
  const navigate = useNavigate();

  const handleClickCreate = async (name: string, description: string) => {
    const response = await createBoard(name, description);
    if (!response) return;
    const { id } = response;
    navigate(`/${id}`);
  };

  return (
    <div className="w-screen h-screen fixed inset-0 p-10 grid place-items-center bg-[#00000033]">
      <div className="max-w-2xl w-full">
        <BoardAddCard handleClickCreate={handleClickCreate} />
      </div>
    </div>
  );
};
