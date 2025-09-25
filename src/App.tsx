import { useState, useEffect } from "react";
import { X } from "lucide-react";
import imgUserIconContainer from "figma:asset/a91dbc2de632b25379f2f721f7377c0434fc4fd3.png";
import imgRectangle34624400 from "figma:asset/60aea2ec6a0ce37bf1e1b7dc38bba248ffc465bf.png";
import imgRectangle34624401 from "figma:asset/ff9287398e34cf8cfeba8835aaf01099bb89c1ac.png";
import imgRectangle34624402 from "figma:asset/39e303632eddb3b422f535e430c575cf6fb9ef29.png";
import imgRectangle34624403 from "figma:asset/7b4a2bdac00788982037348225f249944c8c04f4.png";
import imgRectangle34624404 from "figma:asset/a9eb1b9266db6e249170e18bfe095971a7842e47.png";
import imgRectangle34624405 from "figma:asset/5b7be6950b3387fdfca32dde435b12772a3e6936.png";
import imgRectangle34624406 from "figma:asset/6c7e3e48584bc01b9e1701c0a294e58f59e8eaec.png";
import imgRectangle34624407 from "figma:asset/62374ca52fc8ea12e5d1905d465c133e98362993.png";
import imgRectangle34624408 from "figma:asset/3babcad2d409735393945c567a41e6979f6a7222.png";
import {
  imgLogo021,
  imgSearch01,
  imgDashboard,
  imgHugeIconEducationOutlineLibrary,
  imgHugeIconEducationOutlineCompass,
  imgNavegacaoPrincipal,
} from "./imports/svg-6eh6q";

// Types for better organization
type CourseCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
};

type Section = "trilhas" | "categorias";
type ActiveTrilha =
  | "meta-producao"
  | "estoque-materia"
  | "assistente-ia";
type ActiveCategoria =
  | "planejamento-metas"
  | "gestao-controle"
  | "ferramentas-digitais"
  | "operacao-assistente"
  | "personalizacao-customizacao";

// Sample course data
const courseData: CourseCard[] = [
  {
    id: "1",
    title: "Planejamento Produtivo",
    description:
      "Defina metas de produção e faturamento alinhadas ao comercial e financeiro.",
    image: imgRectangle34624400,
    category: "planejamento-metas",
  },
  {
    id: "2",
    title: "Da Meta à Execução",
    description:
      "Transforme objetivos estratégicos em planos integrados de compras, vendas e produção.",
    image: imgRectangle34624401,
    category: "planejamento-metas",
  },
  {
    id: "3",
    title: "Gestão de Estoque",
    description:
      "Aprenda a controlar entradas, saídas e saldo de matéria-prima em tempo real.",
    image: imgRectangle34624402,
    category: "gestao-controle",
  },
  {
    id: "4",
    title: "Rastreabilidade de Insumos",
    description:
      "Crie e gerencie lotes de matéria-prima para garantir custo e qualidade no processo.",
    image: imgRectangle34624403,
    category: "gestao-controle",
  },
  {
    id: "5",
    title: "Aprendendo a Utilizar o Menu do Assistente",
    description:
      "Explore cada opção do menu e aprenda a acessar rapidamente os recursos mais usados.",
    image: imgRectangle34624405,
    category: "ferramentas-digitais",
  },
  {
    id: "6",
    title: "Como Acessar o Assistente",
    description:
      "Veja o passo a passo para realizar seu primeiro acesso de forma simples e segura.",
    image: imgRectangle34624406,
    category: "ferramentas-digitais",
  },
  {
    id: "7",
    title: "Aprendendo a Usar Seu Assistente",
    description:
      "Descubra as funções principais do assistente e como aplicá-las no seu dia a dia.",
    image: imgRectangle34624404,
    category: "operacao-assistente",
  },
  {
    id: "8",
    title: "Customização de Restrições no Assistente",
    description:
      "Aprenda a configurar regras e restrições para adaptar o assistente às suas necessidades.",
    image: imgRectangle34624407,
    category: "personalizacao-customizacao",
  },
  {
    id: "9",
    title: "Customizando a Persona do Seu Assistente",
    description:
      "Personalize a identidade e o comportamento do assistente para alinhar ao seu estilo de trabalho.",
    image: imgRectangle34624408,
    category: "personalizacao-customizacao",
  },
];

function Logo021() {
  return (
    <div
      className="h-8 relative shrink-0 w-[113.778px]"
      data-name="logo-02 1"
    >
      <img
        className="block max-w-none size-full"
        src={imgLogo021}
      />
    </div>
  );
}

function Search01() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="search-01"
    >
      <img
        className="block max-w-none size-full"
        src={imgSearch01}
      />
    </div>
  );
}

function Search({
  searchTerm,
  onSearchChange,
}: {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}) {
  const handleClearSearch = () => {
    onSearchChange("");
  };

  return (
    <div
      className="bg-[#31313a] box-border content-stretch flex gap-1.5 h-9 items-center justify-start px-3 py-2 relative rounded-[8px] shrink-0 w-full max-w-[503px] min-w-[200px]"
      data-name="Search"
    >
      <Search01 />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="O que você quer aprender hoje?"
        className="bg-transparent border-none outline-none font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic opacity-50 relative shrink-0 text-[14px] text-white tracking-[-0.08px] flex-1"
      />
      {searchTerm && (
        <button
          onClick={handleClearSearch}
          className="shrink-0 size-4 flex items-center justify-center text-white opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Limpar busca"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}

function UserIconContainer() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[100px] shrink-0 size-8"
      data-name="User Icon Container"
      style={{
        backgroundImage: `url('${imgUserIconContainer}')`,
      }}
    />
  );
}

function Dashboard() {
  return (
    <div
      className="relative shrink-0 size-[30px] cursor-pointer hover:opacity-80 transition-opacity"
      data-name="dashboard"
    >
      <img
        className="block max-w-none size-full"
        src={imgDashboard}
      />
    </div>
  );
}

function Frame1171277871() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-20 hidden">
      <UserIconContainer />
      <Dashboard />
    </div>
  );
}

function Header({
  searchTerm,
  onSearchChange,
}: {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}) {
  return (
    <div
      className="box-border flex h-[86px] items-center justify-between px-4 md:px-6 py-0 w-full bg-[#1c1c21] gap-4"
      data-name="Header"
    >
      <div className="shrink-0">
        <Logo021 />
      </div>
      <div className="flex-1 flex justify-center max-w-2xl">
        <Search
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
        />
      </div>
      <div className="shrink-0">
        <Frame1171277871 />
      </div>
    </div>
  );
}

function HugeIconEducationOutlineLibrary() {
  return (
    <div
      className="relative shrink-0 size-6"
      data-name="huge-icon/education/outline/library"
    >
      <img
        className="block max-w-none size-full"
        src={imgHugeIconEducationOutlineLibrary}
      />
    </div>
  );
}

function Frame1171277881() {
  return (
    <div className="content-stretch flex gap-2.5 items-center justify-start relative shrink-0 w-full">
      <HugeIconEducationOutlineLibrary />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">
          Trilhas
        </p>
      </div>
    </div>
  );
}

function Frame1171277832({
  activeTrilha,
  onTrilhaClick,
}: {
  activeTrilha: ActiveTrilha;
  onTrilhaClick: (trilha: ActiveTrilha) => void;
}) {
  const trilhas = [
    {
      id: "meta-producao" as ActiveTrilha,
      name: "Da Meta ao Plano de Produção",
    },
    {
      id: "estoque-materia" as ActiveTrilha,
      name: "Controle de Estoque e Matéria-Prima",
    },
    {
      id: "assistente-ia" as ActiveTrilha,
      name: "Assistente IA",
    },
  ];

  return (
    <div className="content-stretch flex flex-col font-['Inter:Light',_sans-serif] font-light gap-5 items-start justify-start leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-400 w-full">
      {trilhas.map((trilha) => (
        <div
          key={trilha.id}
          className={`relative shrink-0 w-full cursor-pointer transition-colors hover:text-[#FFC648] ${
            activeTrilha === trilha.id ? "text-white" : ""
          }`}
          onClick={() => onTrilhaClick(trilha.id)}
        >
          <p className="leading-[normal]">{trilha.name}</p>
        </div>
      ))}
    </div>
  );
}

function NavBarTrilhas({
  activeTrilha,
  onTrilhaClick,
}: {
  activeTrilha: ActiveTrilha;
  onTrilhaClick: (trilha: ActiveTrilha) => void;
}) {
  return (
    <div
      className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0 w-full"
      data-name="Nav_Bar Trilhas"
    >
      <Frame1171277881 />
      <Frame1171277832
        activeTrilha={activeTrilha}
        onTrilhaClick={onTrilhaClick}
      />
    </div>
  );
}

function HugeIconEducationOutlineCompass() {
  return (
    <div
      className="relative shrink-0 size-6"
      data-name="huge-icon/education/outline/compass"
    >
      <img
        className="block max-w-none size-full"
        src={imgHugeIconEducationOutlineCompass}
      />
    </div>
  );
}

function Frame1171277882() {
  return (
    <div className="content-stretch flex gap-2.5 items-center justify-start relative shrink-0 w-full">
      <HugeIconEducationOutlineCompass />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">
          Categorias
        </p>
      </div>
    </div>
  );
}

function Frame1171277833({
  activeCategorias,
  onCategoriaClick,
}: {
  activeCategorias: ActiveCategoria[];
  onCategoriaClick: (categoria: ActiveCategoria) => void;
}) {
  const categorias = [
    {
      id: "planejamento-metas" as ActiveCategoria,
      name: "Planejamento e Metas",
    },
    {
      id: "gestao-controle" as ActiveCategoria,
      name: "Gestão e Controle",
    },
    {
      id: "ferramentas-digitais" as ActiveCategoria,
      name: "Uso de Ferramentas Digitais",
    },
    {
      id: "operacao-assistente" as ActiveCategoria,
      name: "Operação com Assistente IA",
    },
    {
      id: "personalizacao-customizacao" as ActiveCategoria,
      name: "Personalização e Customização",
    },
  ];

  return (
    <div className="content-stretch flex flex-col font-['Inter:Light',_sans-serif] font-light gap-5 items-start justify-start leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-400 w-full">
      {categorias.map((categoria) => (
        <div
          key={categoria.id}
          className={`relative shrink-0 cursor-pointer transition-colors hover:text-[#FFC648] flex items-center gap-2 ${
            activeCategorias.includes(categoria.id)
              ? "text-white"
              : ""
          }`}
          onClick={() => onCategoriaClick(categoria.id)}
        >
          {activeCategorias.includes(categoria.id) && (
            <div className="w-2 h-2 bg-[#FFC648] rounded-full shrink-0" />
          )}
          <p className="leading-[normal] whitespace-pre">
            {categoria.name}
          </p>
        </div>
      ))}
    </div>
  );
}

function NavBarCategorias({
  activeCategorias,
  onCategoriaClick,
}: {
  activeCategorias: ActiveCategoria[];
  onCategoriaClick: (categoria: ActiveCategoria) => void;
}) {
  return (
    <div
      className="content-stretch flex flex-col gap-8 h-[229px] items-start justify-start relative shrink-0 w-full"
      data-name="Nav_Bar Categorias"
    >
      <Frame1171277882 />
      <Frame1171277833
        activeCategorias={activeCategorias}
        onCategoriaClick={onCategoriaClick}
      />
    </div>
  );
}

function NavegacaoPrincipal({
  activeTrilha,
  onTrilhaClick,
  activeCategorias,
  onCategoriaClick,
}: {
  activeTrilha: ActiveTrilha;
  onTrilhaClick: (trilha: ActiveTrilha) => void;
  activeCategorias: ActiveCategoria[];
  onCategoriaClick: (categoria: ActiveCategoria) => void;
}) {
  return (
    <div
      className="box-border flex flex-col gap-[57px] h-full items-start justify-start p-[20px] w-[283px] bg-[#1c1c21] shrink-0 hidden lg:flex"
      data-name="Navegação principal"
    >
      <NavBarTrilhas
        activeTrilha={activeTrilha}
        onTrilhaClick={onTrilhaClick}
      />
      <NavBarCategorias
        activeCategorias={activeCategorias}
        onCategoriaClick={onCategoriaClick}
      />
    </div>
  );
}

function CloseButton({ onRemove }: { onRemove: () => void }) {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4 cursor-pointer hover:opacity-70 transition-opacity"
      data-name="Close Button"
      onClick={onRemove}
    >
      <img
        className="block max-w-none size-full"
        src={imgNavegacaoPrincipal}
      />
    </div>
  );
}

function ClassificationTag({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <div
      className="bg-[#1c1c21] box-border content-stretch flex gap-[5px] h-[30px] items-center justify-start px-1.5 py-2 relative rounded-[4px] shrink-0 max-w-full"
      data-name="Classification Tag"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffc648] text-[14px] tracking-[-0.08px] truncate max-w-[200px] sm:max-w-none">
        <p className="leading-[28px] truncate">{label}</p>
      </div>
      <CloseButton onRemove={onRemove} />
    </div>
  );
}

function FilterTags({
  activeFilters,
  onRemoveFilter,
  onClearAll,
}: {
  activeFilters: string[];
  onRemoveFilter: (filter: string) => void;
  onClearAll: () => void;
}) {
  const filterLabels: { [key: string]: string } = {
    "planejamento-metas": "Planejamento e Metas",
    "gestao-controle": "Gestão e Controle",
    "ferramentas-digitais": "Uso de Ferramentas Digitais",
    "operacao-assistente": "Operação com Assistente IA",
    "personalizacao-customizacao":
      "Personalização e Customização",
  };

  if (activeFilters.length === 0) return null;

  return (
    <div
      className="flex flex-wrap gap-2 md:gap-[15px] items-center justify-start relative w-full overflow-hidden"
      data-name="Filter Tags"
    >
      {activeFilters.map((filter) => (
        <ClassificationTag
          key={filter}
          label={filterLabels[filter] || filter}
          onRemove={() => onRemoveFilter(filter)}
        />
      ))}
      {activeFilters.length > 1 && (
        <button
          onClick={onClearAll}
          className="bg-[#d4183d] hover:bg-[#b91632] transition-colors box-border content-stretch flex gap-[5px] h-[30px] items-center justify-start px-3 py-2 relative rounded-[4px] shrink-0"
        >
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-white text-[14px] tracking-[-0.08px]">
            <p className="leading-[28px]">Limpar tags</p>
          </div>
        </button>
      )}
    </div>
  );
}

function Card({
  course,
  onClick,
}: {
  course: CourseCard;
  onClick: () => void;
}) {
  const getCategoryName = (
    category: string,
    courseTitle: string,
  ) => {
    // Custom category tags for specific courses (must use existing category names)
    const customCourseTags: { [key: string]: string } = {
      "Da Meta à Execução": "Gestão e Controle",
      "Gestão de Estoque": "Uso de Ferramentas Digitais",
    };

    // Check if this course has a custom category tag
    if (customCourseTags[courseTitle]) {
      return customCourseTags[courseTitle];
    }

    // Default category mapping
    const categoryMap: { [key: string]: string } = {
      "planejamento-metas": "Planejamento e Metas",
      "gestao-controle": "Gestão e Controle",
      "ferramentas-digitais": "Uso de Ferramentas Digitais",
      "operacao-assistente": "Operação com Assistente IA",
      "personalizacao-customizacao":
        "Personalização e Customização",
    };
    return categoryMap[category] || category;
  };

  return (
    <div
      id={`card-${course.id}`}
      className="card-tutorial h-[390px] relative shrink-0 w-full max-w-[319px] min-w-[280px] cursor-pointer group"
      data-name="card"
      onClick={onClick}
    >
      <div className="absolute bg-[#232329] h-[385px] left-0 rounded-[16px] top-0 w-full group-hover:bg-[#2a2a31] transition-colors" />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[205px] left-0 rounded-tl-[16px] rounded-tr-[16px] top-0 w-full"
        style={{ backgroundImage: `url('${course.image}')` }}
      />

      <div className="absolute content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-[3px] items-start justify-start leading-[0] left-[23px] not-italic top-[227px] right-[23px]">
        <div className="relative shrink-0 text-[16px] text-white">
          <p className="leading-[normal]">{course.title}</p>
        </div>
        <div className="relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)]">
          <p className="leading-[normal] px-[0px] py-[8px]">
            {course.description}
          </p>
        </div>

        {/* Category Tag - moved to bottom */}
        <div className="mt-2">
          <div className="bg-[rgba(255,198,72,0.9)] backdrop-blur-sm box-border px-2 py-1 rounded-[4px] shrink-0 inline-block">
            <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic text-[12px] text-[#1c1c21] text-nowrap tracking-[-0.08px]">
              <p className="leading-[normal]">
                {getCategoryName(course.category, course.title)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  // UserGuiding Integration - Initialize user identification when UserGuiding is ready
  useEffect(() => {
    // Wait for UserGuiding to be available (loaded from HTML)
    const checkUserGuiding = setInterval(() => {
      if (
        typeof window !== "undefined" &&
        (window as any).userGuiding
      ) {
        try {
          // Identify user with attributes
          (window as any).userGuiding.identify(
            "1Ax69i57j0j69i60l4",
            {
              email: "user@awesome.com",
              name: "Learning Platform User",
              created_at: Date.now(),
            },
          );
          console.log("✅ UserGuiding user identified");
          console.log("🔧 UserGuiding methods available:", Object.keys((window as any).userGuiding));
          clearInterval(checkUserGuiding);
        } catch (error) {
          console.error("Error identifying user:", error);
          clearInterval(checkUserGuiding);
        }
      }
    }, 100);

    // Clear interval after 10 seconds if UserGuiding hasn't loaded
    setTimeout(() => {
      clearInterval(checkUserGuiding);
    }, 10000);

    // Cleanup function
    return () => {
      clearInterval(checkUserGuiding);
    };
  }, []);

  // UserGuiding DOM event listeners for cards 5, 6, and 9
  useEffect(() => {
    // Card-5 handler
    const handleCard5Click = () => {
      if (
        typeof window !== "undefined" &&
        (window as any).userGuiding
      ) {
        try {
          (window as any).userGuiding.previewGuide(152560);
          console.log(
            "UserGuiding guide triggered via DOM event listener for card-5",
          );
        } catch (error) {
          console.error(
            "Error triggering UserGuiding via DOM event:",
            error,
          );
        }
      } else {
        console.warn("UserGuiding not available for DOM event card-5");
      }
    };

    // Card-3 handler
    const handleCard3Click = () => {
      if (
        typeof window !== "undefined" &&
        (window as any).userGuiding
      ) {
        try {
          (window as any).userGuiding.previewGuide(152203);
          console.log(
            "UserGuiding guide triggered via DOM event listener for card-3",
          );
        } catch (error) {
          console.error(
            "Error triggering UserGuiding via DOM event for card-3:",
            error,
          );
        }
      } else {
        console.warn("UserGuiding not available for DOM event card-3");
      }
    };

    // Card-6 handler
    const handleCard6Click = () => {
      if (
        typeof window !== "undefined" &&
        (window as any).userGuiding
      ) {
        try {
          (window as any).userGuiding.previewGuide(152669);
          console.log(
            "UserGuiding guide triggered via DOM event listener for card-6",
          );
        } catch (error) {
          console.error(
            "Error triggering UserGuiding via DOM event for card-6:",
            error,
          );
        }
      } else {
        console.warn("UserGuiding not available for DOM event card-6");
      }
    };

    // Card-7 handler
    const handleCard7Click = () => {
      if (
        typeof window !== "undefined" &&
        (window as any).userGuiding
      ) {
        try {
          (window as any).userGuiding.previewGuide(152718);
          console.log(
            "UserGuiding guide triggered via DOM event listener for card-7",
          );
        } catch (error) {
          console.error(
            "Error triggering UserGuiding via DOM event for card-7:",
            error,
          );
        }
      } else {
        console.warn("UserGuiding not available for DOM event card-7");
      }
    };

    // Card-8 handler
    const handleCard8Click = () => {
      if (
        typeof window !== "undefined" &&
        (window as any).userGuiding
      ) {
        try {
          (window as any).userGuiding.previewGuide(152151);
          console.log(
            "UserGuiding guide triggered via DOM event listener for card-8",
          );
        } catch (error) {
          console.error(
            "Error triggering UserGuiding via DOM event for card-8:",
            error,
          );
        }
      } else {
        console.warn("UserGuiding not available for DOM event card-8");
      }
    };

    // Card-9 handler
    const handleCard9Click = () => {
      if (
        typeof window !== "undefined" &&
        (window as any).userGuiding
      ) {
        try {
          (window as any).userGuiding.previewGuide(152030);
          console.log(
            "UserGuiding guide triggered via DOM event listener for card-9",
          );
        } catch (error) {
          console.error(
            "Error triggering UserGuiding via DOM event for card-9:",
            error,
          );
        }
      } else {
        console.warn("UserGuiding not available for DOM event card-9");
      }
    };

    // Wait for cards to be available in DOM
    const waitForCards = () => {
      const card3Element = document.getElementById("card-3");
      const card5Element = document.getElementById("card-5");
      const card6Element = document.getElementById("card-6");
      const card7Element = document.getElementById("card-7");
      const card8Element = document.getElementById("card-8");
      const card9Element = document.getElementById("card-9");

      // Setup card-3
      if (card3Element) {
        card3Element.removeEventListener("click", handleCard3Click);
        card3Element.addEventListener("click", handleCard3Click);
        console.log("DOM event listener added to card-3");
      }

      // Setup card-5
      if (card5Element) {
        card5Element.removeEventListener("click", handleCard5Click);
        card5Element.addEventListener("click", handleCard5Click);
        console.log("DOM event listener added to card-5");
      }

      // Setup card-6
      if (card6Element) {
        card6Element.removeEventListener("click", handleCard6Click);
        card6Element.addEventListener("click", handleCard6Click);
        console.log("DOM event listener added to card-6");
      }

      // Setup card-7
      if (card7Element) {
        card7Element.removeEventListener("click", handleCard7Click);
        card7Element.addEventListener("click", handleCard7Click);
        console.log("DOM event listener added to card-7");
      }

      // Setup card-8
      if (card8Element) {
        card8Element.removeEventListener("click", handleCard8Click);
        card8Element.addEventListener("click", handleCard8Click);
        console.log("DOM event listener added to card-8");
      }

      // Setup card-9
      if (card9Element) {
        card9Element.removeEventListener("click", handleCard9Click);
        card9Element.addEventListener("click", handleCard9Click);
        console.log("DOM event listener added to card-9");
      }

      return {
        card3Found: !!card3Element,
        card5Found: !!card5Element,
        card6Found: !!card6Element,
        card7Found: !!card7Element,
        card8Found: !!card8Element,
        card9Found: !!card9Element
      };
    };

    // Try immediately
    const result = waitForCards();

    // If not all cards found, wait a bit and try again
    if (!result.card3Found || !result.card5Found || !result.card6Found || !result.card7Found || !result.card8Found || !result.card9Found) {
      const retryTimer = setTimeout(() => {
        waitForCards();
      }, 500);

      // Cleanup timeout if component unmounts
      return () => {
        clearTimeout(retryTimer);
        const card3Element = document.getElementById("card-3");
        const card5Element = document.getElementById("card-5");
        const card6Element = document.getElementById("card-6");
        const card7Element = document.getElementById("card-7");
        const card8Element = document.getElementById("card-8");
        const card9Element = document.getElementById("card-9");

        if (card3Element) {
          card3Element.removeEventListener("click", handleCard3Click);
        }
        if (card5Element) {
          card5Element.removeEventListener("click", handleCard5Click);
        }
        if (card6Element) {
          card6Element.removeEventListener("click", handleCard6Click);
        }
        if (card7Element) {
          card7Element.removeEventListener("click", handleCard7Click);
        }
        if (card8Element) {
          card8Element.removeEventListener("click", handleCard8Click);
        }
        if (card9Element) {
          card9Element.removeEventListener("click", handleCard9Click);
        }
      };
    }

    // Cleanup function
    return () => {
      const card3Element = document.getElementById("card-3");
      const card5Element = document.getElementById("card-5");
      const card6Element = document.getElementById("card-6");
      const card7Element = document.getElementById("card-7");
      const card8Element = document.getElementById("card-8");
      const card9Element = document.getElementById("card-9");

      if (card3Element) {
        card3Element.removeEventListener("click", handleCard3Click);
        console.log("DOM event listener removed from card-3");
      }
      if (card5Element) {
        card5Element.removeEventListener("click", handleCard5Click);
        console.log("DOM event listener removed from card-5");
      }
      if (card6Element) {
        card6Element.removeEventListener("click", handleCard6Click);
        console.log("DOM event listener removed from card-6");
      }
      if (card7Element) {
        card7Element.removeEventListener("click", handleCard7Click);
        console.log("DOM event listener removed from card-7");
      }
      if (card8Element) {
        card8Element.removeEventListener("click", handleCard8Click);
        console.log("DOM event listener removed from card-8");
      }
      if (card9Element) {
        card9Element.removeEventListener("click", handleCard9Click);
        console.log("DOM event listener removed from card-9");
      }
    };
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeTrilha, setActiveTrilha] =
    useState<ActiveTrilha>("meta-producao");
  const [activeCategorias, setActiveCategorias] = useState<
    ActiveCategoria[]
  >([]);
  const [selectedCourse, setSelectedCourse] =
    useState<CourseCard | null>(null);

  // Show only active category filters when not searching (hide trilha filters)
  const activeFilters: string[] = !searchTerm
    ? activeCategorias
    : [];

  const getFilteredCourses = () => {
    // Only apply search filter - trilha filtering is handled by showing/hiding sections
    if (searchTerm) {
      return courseData.filter(
        (course) =>
          course.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          course.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
      );
    }

    return courseData;
  };

  const filteredCourses = getFilteredCourses();

  const handleRemoveFilter = (filter: string) => {
    // Handle category filters
    setActiveCategorias((prev) =>
      prev.filter((cat) => cat !== filter),
    );
  };

  const handleTrilhaClick = (trilha: ActiveTrilha) => {
    setActiveTrilha(trilha);
    // Keep existing category filters when changing trilha
  };

  const handleCategoriaClick = (categoria: ActiveCategoria) => {
    setActiveCategorias((prev) => {
      if (prev.includes(categoria)) {
        // Remove categoria if already selected
        return prev.filter((cat) => cat !== categoria);
      } else {
        // Add categoria if not selected
        return [...prev, categoria];
      }
    });
  };

  const handleCourseClick = (course: CourseCard) => {
    setSelectedCourse(course);

    // Debug: Log all course clicks
    console.log("🔍 All course clicks:", course.title, "ID:", course.id);

    // Enhanced UserGuiding debugging
    const isUserGuidingAvailable = typeof window !== "undefined" && (window as any).userGuiding;
    console.log("🔧 UserGuiding Status:", {
      windowAvailable: typeof window !== "undefined",
      userGuidingObject: typeof (window as any).userGuiding,
      userGuidingMethods: isUserGuidingAvailable ? Object.keys((window as any).userGuiding) : "N/A"
    });

    // Helper function to trigger UserGuiding with improved error handling
    const triggerUserGuiding = (guideId: number, cardName: string) => {
      if (!isUserGuidingAvailable) {
        console.warn(`⚠️ UserGuiding not available for ${cardName}. Window:`, typeof window, "UserGuiding:", typeof (window as any).userGuiding);
        return false;
      }

      try {
        console.log(`🚀 Attempting to trigger guide ${guideId} for ${cardName}...`);
        (window as any).userGuiding.previewGuide(guideId);
        console.log(`✅ UserGuiding guide ${guideId} triggered successfully for ${cardName}`);
        return true;
      } catch (error) {
        console.error(`❌ Error triggering UserGuiding guide ${guideId} for ${cardName}:`, error);
        return false;
      }
    };

    // Card-5: Aprendendo a Utilizar o Menu do Assistente
    if (course.title === "Aprendendo a Utilizar o Menu do Assistente" || course.id === "5") {
      console.log("🎯 Card-5 clicked! Course:", course.title, "ID:", course.id);
      triggerUserGuiding(152560, "Card-5");
    }

    // Card-3: Gestão de Estoque
    if (course.title === "Gestão de Estoque" || course.id === "3") {
      console.log("🎯 Card-3 clicked! Course:", course.title, "ID:", course.id);
      triggerUserGuiding(152203, "Card-3");
    }

    // Card-6: Como Acessar o Assistente
    if (course.title === "Como Acessar o Assistente" || course.id === "6") {
      console.log("🎯 Card-6 clicked! Course:", course.title, "ID:", course.id);
      triggerUserGuiding(152669, "Card-6");
    }

    // Card-7: Aprendendo a Usar Seu Assistente
    if (course.title === "Aprendendo a Usar Seu Assistente" || course.id === "7") {
      console.log("🎯 Card-7 clicked! Course:", course.title, "ID:", course.id);
      triggerUserGuiding(152718, "Card-7");
    }

    // Card-8: Customização de Restrições no Assistente
    if (course.title === "Customização de Restrições no Assistente" || course.id === "8") {
      console.log("🎯 Card-8 clicked! Course:", course.title, "ID:", course.id);
      triggerUserGuiding(152151, "Card-8");
    }

    // Card-9: Customizando a Persona do Seu Assistente
    if (course.title === "Customizando a Persona do Seu Assistente" || course.id === "9") {
      console.log("🎯 Card-9 clicked! Course:", course.title, "ID:", course.id);
      triggerUserGuiding(152030, "Card-9");
    }

    // Log course opening
    console.log("📖 Opening course:", course.title);
  };

  const handleClearAllFilters = () => {
    setActiveCategorias([]);
  };

  // Helper function to get effective category (considering custom tags)
  const getEffectiveCategory = (course: CourseCard): string => {
    const customCourseTags: { [key: string]: string } = {
      "Da Meta à Execução": "gestao-controle", // Maps to "Gestão e Controle"
      "Gestão de Estoque": "ferramentas-digitais", // Maps to "Uso de Ferramentas Digitais"
    };

    if (customCourseTags[course.title]) {
      return customCourseTags[course.title];
    }

    return course.category;
  };

  // Get courses by trilha and apply category filters
  const getFilteredCoursesByTrilha = (
    trilhaCourses: CourseCard[],
  ) => {
    if (activeCategorias.length === 0) {
      return trilhaCourses;
    }
    return trilhaCourses.filter((course) => {
      const effectiveCategory = getEffectiveCategory(course);
      return activeCategorias.includes(
        effectiveCategory as ActiveCategoria,
      );
    });
  };

  // Get courses filtered by category globally (across all trilhas)
  const getCoursesFilteredByCategory = () => {
    if (activeCategorias.length === 0) {
      return [];
    }

    return courseData.filter((course) => {
      const effectiveCategory = getEffectiveCategory(course);
      return activeCategorias.includes(effectiveCategory as ActiveCategoria);
    });
  };

  // Define course distribution by trilha (based on content theme, not just category)
  const metaProducaoCourses = getFilteredCoursesByTrilha(
    courseData.filter(
      (c) =>
        c.title === "Planejamento Produtivo" ||
        c.title === "Da Meta à Execução",
    ),
  );

  const estoqueMateriaCourses = getFilteredCoursesByTrilha(
    courseData.filter(
      (c) =>
        c.title === "Gestão de Estoque" ||
        c.title === "Rastreabilidade de Insumos",
    ),
  );

  const assistenteIACourses = getFilteredCoursesByTrilha(
    courseData.filter(
      (c) =>
        c.title ===
          "Aprendendo a Utilizar o Menu do Assistente" ||
        c.title === "Como Acessar o Assistente" ||
        c.title === "Aprendendo a Usar Seu Assistente" ||
        c.title ===
          "Customização de Restrições no Assistente" ||
        c.title === "Customizando a Persona do Seu Assistente",
    ),
  );

  // Get courses filtered globally by category
  const globalCategoryFilteredCourses = getCoursesFilteredByCategory();

  // Helper function to get category display names
  const getCategoryDisplayNames = (categorias: ActiveCategoria[]): string => {
    const categoryMap: { [key: string]: string } = {
      "planejamento-metas": "Planejamento e Metas",
      "gestao-controle": "Gestão e Controle",
      "ferramentas-digitais": "Uso de Ferramentas Digitais",
      "operacao-assistente": "Operação com Assistente IA",
      "personalizacao-customizacao": "Personalização e Customização",
    };

    return categorias
      .map((cat) => categoryMap[cat] || cat)
      .join(", ");
  };

  return (
    <div className="bg-[#1c1c21] min-h-screen w-full" data-name>
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* Mobile Navigation */}
      <div className="lg:hidden border-b border-gray-700 bg-[#1c1c21] px-4 py-3">
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 overflow-x-auto">
            <select
              value={activeTrilha}
              onChange={(e) =>
                handleTrilhaClick(
                  e.target.value as ActiveTrilha,
                )
              }
              className="bg-[#31313a] text-white rounded px-3 py-1 text-sm border-none outline-none"
            >
              <option value="meta-producao">
                Da Meta ao Plano de Produção
              </option>
              <option value="estoque-materia">
                Controle de Estoque e Matéria-Prima
              </option>
              <option value="assistente-ia">
                Assistente IA
              </option>
            </select>
          </div>

          {/* Multiple Category Selection */}
          <div className="flex flex-col gap-2">
            <span className="text-white text-sm">
              Categorias:
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                {
                  id: "planejamento-metas" as ActiveCategoria,
                  name: "Planejamento e Metas",
                },
                {
                  id: "gestao-controle" as ActiveCategoria,
                  name: "Gestão e Controle",
                },
                {
                  id: "ferramentas-digitais" as ActiveCategoria,
                  name: "Ferramentas Digitais",
                },
                {
                  id: "operacao-assistente" as ActiveCategoria,
                  name: "Assistente IA",
                },
                {
                  id: "personalizacao-customizacao" as ActiveCategoria,
                  name: "Personalização",
                },
              ].map((categoria) => (
                <button
                  key={categoria.id}
                  onClick={() =>
                    handleCategoriaClick(categoria.id)
                  }
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    activeCategorias.includes(categoria.id)
                      ? "bg-[#FFC648] text-[#1c1c21]"
                      : "bg-[#31313a] text-white hover:bg-[#3a3a44]"
                  }`}
                >
                  {categoria.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <NavegacaoPrincipal
          activeTrilha={activeTrilha}
          onTrilhaClick={handleTrilhaClick}
          activeCategorias={activeCategorias}
          onCategoriaClick={handleCategoriaClick}
        />
        <div
          className="flex-1 flex flex-col gap-[26px] py-5 px-0"
          data-name="Main Container"
        >
          <div className="px-4 md:px-5">
            <FilterTags
              activeFilters={activeFilters}
              onRemoveFilter={handleRemoveFilter}
              onClearAll={handleClearAllFilters}
            />
          </div>
          <div className="flex-1" data-name="Content container">
            <div className="h-full">
              <div className="flex flex-col gap-[30px] px-4 md:px-5 h-full">
                {/* Search Results */}
                {searchTerm && filteredCourses.length > 0 && (
                  <div className="flex flex-col gap-5 items-start justify-start relative w-full">
                    <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
                      <p className="leading-[normal]">
                        Resultados da busca para "{searchTerm}"
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
                      {filteredCourses.map((course) => (
                        <Card
                          key={course.id}
                          course={course}
                          onClick={() =>
                            handleCourseClick(course)
                          }
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* No Search Results */}
                {searchTerm && filteredCourses.length === 0 && (
                  <div className="flex items-center justify-center relative w-full h-64">
                    <div className="text-center">
                      <p className="text-white text-xl mb-2">
                        Nenhum curso encontrado
                      </p>
                      <p className="text-neutral-400">
                        Tente buscar com outros termos
                      </p>
                    </div>
                  </div>
                )}

                {/* Category Filter Results - Show when categories are selected and no search term */}
                {!searchTerm && activeCategorias.length > 0 && globalCategoryFilteredCourses.length > 0 && (
                  <div className="flex flex-col gap-5 items-start justify-start relative w-full">
                    <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
                      <p className="leading-[normal]">
                        Cursos da categoria: {getCategoryDisplayNames(activeCategorias)}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
                      {globalCategoryFilteredCourses.map((course) => (
                        <Card
                          key={course.id}
                          course={course}
                          onClick={() => handleCourseClick(course)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* No Category Filter Results */}
                {!searchTerm && activeCategorias.length > 0 && globalCategoryFilteredCourses.length === 0 && (
                  <div className="flex items-center justify-center relative w-full h-64">
                    <div className="text-center">
                      <p className="text-white text-xl mb-2">
                        Nenhum curso encontrado
                      </p>
                      <p className="text-neutral-400">
                        Nenhum curso encontrado para as categorias selecionadas
                      </p>
                    </div>
                  </div>
                )}

                {/* Trilha Content - Show by trilha only when no categories are selected */}
                {!searchTerm && activeCategorias.length === 0 && (
                  <>
                    {/* Da Meta ao Plano de Produção Section */}
                    {activeTrilha === "meta-producao" && (
                      <div
                        className="flex flex-col gap-5 items-start justify-start relative w-full"
                        data-name="01 List"
                      >
                        <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
                          <p className="leading-[normal]">
                            Da Meta ao Plano de Produção
                          </p>
                        </div>
                        <div
                          className="w-full"
                          data-name="CARDS CONTAINER (Horizontal)"
                        >
                          {metaProducaoCourses.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
                              {metaProducaoCourses.map(
                                (course) => (
                                  <Card
                                    key={course.id}
                                    course={course}
                                    onClick={() =>
                                      handleCourseClick(course)
                                    }
                                  />
                                ),
                              )}
                            </div>
                          ) : (
                            <div className="flex items-center justify-center h-32 text-center">
                              <p className="text-neutral-400">
                                Nenhum curso encontrado com os
                                filtros selecionados
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Controle de Estoque e Matéria-Prima Section */}
                    {activeTrilha === "estoque-materia" && (
                      <div
                        className="flex flex-col gap-5 items-start justify-start relative w-full"
                        data-name="02 List"
                      >
                        <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
                          <p className="leading-[normal]">
                            Controle de Estoque e Matéria-Prima
                          </p>
                        </div>
                        <div
                          className="w-full"
                          data-name="CARDS CONTAINER (Horizontal)"
                        >
                          {estoqueMateriaCourses.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
                              {estoqueMateriaCourses.map(
                                (course) => (
                                  <Card
                                    key={course.id}
                                    course={course}
                                    onClick={() =>
                                      handleCourseClick(course)
                                    }
                                  />
                                ),
                              )}
                            </div>
                          ) : (
                            <div className="flex items-center justify-center h-32 text-center">
                              <p className="text-neutral-400">
                                Nenhum curso encontrado com os
                                filtros selecionados
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Assistente IA Section */}
                    {activeTrilha === "assistente-ia" && (
                      <div
                        className="flex flex-col gap-5 items-start justify-start relative w-full"
                        data-name="03 List"
                      >
                        <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
                          <p className="leading-[normal]">
                            Assistente IA
                          </p>
                        </div>
                        <div
                          className="w-full"
                          data-name="CARDS CONTAINER (Horizontal)"
                        >
                          {assistenteIACourses.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
                              {assistenteIACourses.map(
                                (course) => (
                                  <Card
                                    key={course.id}
                                    course={course}
                                    onClick={() =>
                                      handleCourseClick(course)
                                    }
                                  />
                                ),
                              )}
                            </div>
                          ) : (
                            <div className="flex items-center justify-center h-32 text-center">
                              <p className="text-neutral-400">
                                Nenhum curso encontrado com os
                                filtros selecionados
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}