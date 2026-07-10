import { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { ChevronLeft } from "lucide-react";
import DropdownItem from "@/layout/components/desktop/DropdownItem";
import { getIcon } from "@/shared/utils/iconUtils";
import { cn } from "@/shared/utils/cn";
import {
  industriesData,
  useCasesData,
  usersData,
  tabs,
} from "@/shared/data/headerData";

export default function SolutionsDropdown({ onItemClick }) {
  const [activeTab, setActiveTab] = useState("industries");

  const getData = useCallback((dataKey) => {
    const dataMap = {
      industriesData,
      useCasesData,
      usersData,
    };
    const data = dataMap[dataKey];
    return data
      ? data.map((item) => ({
          ...item,
          icon: getIcon(item.icon, item.color),
        }))
      : [];
  }, []);

  const currentTab = useMemo(
    () => tabs.find((tab) => tab.id === activeTab),
    [activeTab],
  );

  const currentData = useMemo(
    () => getData(currentTab?.data || ""),
    [getData, currentTab],
  );

  const handleTabChange = useCallback((tabId) => {
    setActiveTab(tabId);
  }, []);

  return (
    <nav
      className="bg-teritary-3 rounded-b-2xl shadow-[-41px_34px_40px_0px_rgba(0,0,0,0.24)] overflow-hidden border-x border-b border-white-6"
      role="navigation"
      aria-label="Solutions navigation menu"
    >
      <div className="flex flex-row">
        {/* Tab Navigation Sidebar */}
        <aside
          className="w-65 bg-teritary-3 border-l border-white-6 p-8 pl-0 flex flex-col justify-between"
          aria-label="Category filter tabs"
        >
          <div className="flex flex-col gap-3 text-right">
            <h2 className="text-white-3 type-subtitle-2" id="filter-heading">
              مشاهده بر اساس
            </h2>
            <ul
              className="flex flex-col"
              role="tablist"
              aria-labelledby="filter-heading"
              aria-orientation="vertical"
            >
              {tabs.map((tab) => (
                <li key={tab.id} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={activeTab === tab.id}
                    aria-controls={`tabpanel-${tab.id}`}
                    onClick={() => handleTabChange(tab.id)}
                    className={cn(
                      "w-full py-3 cursor-pointer transition-colors text-right",
                      activeTab === tab.id
                        ? "border-l-4 border-primary-1"
                        : "hover:bg-teritary-4/50",
                    )}
                  >
                    <span
                      className={cn(
                        "type-h6 text-right block",
                        activeTab === tab.id
                          ? "text-primary-1"
                          : "text-white-2",
                      )}
                    >
                      {tab.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content - Solutions Grid */}
        <section
          className="flex-1 p-8"
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          aria-label="Solutions list"
        >
          <ul className="grid grid-cols-3 gap-4" role="list">
            {currentData.map((item, index) => (
              <li key={item.id || index} role="listitem">
                <DropdownItem
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  slug={item.slug}
                  onItemClick={onItemClick}
                />
              </li>
            ))}
          </ul>
        </section>

        {/* Info Sidebar */}
        <aside
          className="w-65 bg-teritary-3 border-r border-white-6 p-8 flex flex-col justify-between"
          aria-label="Category information"
        >
          <header className="flex flex-col gap-3 text-right text-white-2">
            <h3 className="type-subtitle-1">آموزش‌ و دانشگاه</h3>
            <p className="type-captions-2 leading-relaxed">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع
            </p>
          </header>
          <a
            href="#"
            className="flex flex-row gap-1 items-center cursor-pointer group"
            aria-label="View all industries"
          >
            <span className="text-primary-1 type-subtitle-1">همه صنایع</span>
            <ChevronLeft
              className="size-7 text-primary-1 transition-transform group-hover:-translate-x-1"
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </aside>
      </div>
    </nav>
  );
}

SolutionsDropdown.propTypes = {
  onItemClick: PropTypes.func,
};
