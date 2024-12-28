interface ActionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function ActionButton({ onClick, children }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full py-3 px-6 bg-[#2a2f3a] text-[#6b8aaa] rounded-lg 
                 hover:bg-[#353b47] transition-colors"
    >
      {children}
    </button>
  );
}

export function MissionaryActions() {
  return (
    <div className="mt-6">
      <ActionButton onClick={() => alert('Ações missionárias clicked')}>
        Ações missionárias
      </ActionButton>
    </div>
  );
}