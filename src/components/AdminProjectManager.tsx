import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Plus,
  Trash2,
  ArrowUp,
  ArrowDown,
  Eye,
  EyeOff,
  Edit3,
  Check,
  RotateCcw,
  Sparkles,
  Image as ImageIcon,
  Sliders,
  AlertTriangle,
  Layers,
  Save
} from "lucide-react";
import { ProjectItem, INITIAL_PROJECTS } from "../data/projectsData";

interface AdminProjectManagerProps {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectItem[];
  onSaveProjects: (projects: ProjectItem[]) => void;
}

const SAMPLE_IMAGES = [
  { label: "Modern Mobile App", url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop" },
  { label: "Luxury Jewelry", url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop" },
  { label: "Industrial & Tech", url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop" },
  { label: "Logistics & Transport", url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop" },
  { label: "AI Dashboard / Server", url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" },
  { label: "Synthesizer Console", url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop" },
  { label: "Cosmetic & Glass", url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop" },
  { label: "Minimalist Pouch", url: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?q=80&w=1200&auto=format&fit=crop" }
];

export default function AdminProjectManager({
  isOpen,
  onClose,
  projects,
  onSaveProjects
}: AdminProjectManagerProps) {
  const [items, setItems] = useState<ProjectItem[]>(projects);
  const [editingItem, setEditingItem] = useState<ProjectItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [deletePromptId, setDeletePromptId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync with prop when opened
  React.useEffect(() => {
    setItems(projects);
  }, [projects, isOpen]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Move Item Up in order
  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[index - 1];
    newItems[index - 1] = temp;

    // Update order property
    const reordered = newItems.map((item, idx) => ({ ...item, order: idx + 1 }));
    setItems(reordered);
    onSaveProjects(reordered);
    showToast(`Moved "${temp.title}" up in gallery`);
  };

  // Move Item Down in order
  const handleMoveDown = (index: number) => {
    if (index === items.length - 1) return;
    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[index + 1];
    newItems[index + 1] = temp;

    // Update order property
    const reordered = newItems.map((item, idx) => ({ ...item, order: idx + 1 }));
    setItems(reordered);
    onSaveProjects(reordered);
    showToast(`Moved "${temp.title}" down in gallery`);
  };

  // Toggle Visibility
  const handleToggleVisibility = (id: string) => {
    const updated = items.map((item) => {
      if (item.id === id) {
        const nextState = !item.visible;
        showToast(nextState ? `Enabled "${item.title}" in gallery` : `Hidden "${item.title}" from public gallery`);
        return { ...item, visible: nextState };
      }
      return item;
    });
    setItems(updated);
    onSaveProjects(updated);
  };

  // Confirm Delete
  const handleConfirmDelete = (id: string) => {
    const target = items.find((i) => i.id === id);
    const updated = items
      .filter((i) => i.id !== id)
      .map((item, idx) => ({ ...item, order: idx + 1 }));
    setItems(updated);
    onSaveProjects(updated);
    setDeletePromptId(null);
    showToast(`Deleted "${target?.title || "project"}"`);
  };

  // Reset to Defaults
  const handleResetDefaults = () => {
    if (window.confirm("Reset all showcase projects back to initial agency defaults?")) {
      setItems(INITIAL_PROJECTS);
      onSaveProjects(INITIAL_PROJECTS);
      showToast("Reset showcase to default agency portfolio");
    }
  };

  // Form State for Create / Edit
  const [formData, setFormData] = useState<Partial<ProjectItem>>({
    title: "",
    category: "Full-Stack Web & eCommerce",
    client: "",
    year: new Date().getFullYear().toString(),
    image: SAMPLE_IMAGES[0].url,
    height: 380,
    description: "",
    deliverables: ["Custom Funnel Architecture", "High-Performance Next.js", "API Integrations"],
    specs: [
      { label: "Tech Stack", value: "React / Node.js" },
      { label: "Outcome", value: "2x Conversion Lift" }
    ],
    accentQuote: "",
    visible: true
  });

  const startCreate = () => {
    setFormData({
      title: "",
      category: "Full-Stack Web & eCommerce",
      client: "",
      year: new Date().getFullYear().toString(),
      image: SAMPLE_IMAGES[0].url,
      height: 380,
      description: "",
      deliverables: ["Custom Funnel Architecture", "High-Performance Next.js", "API Integrations"],
      specs: [
        { label: "Tech Stack", value: "React / Node.js" },
        { label: "Outcome", value: "2x Conversion Lift" }
      ],
      accentQuote: "",
      visible: true
    });
    setIsCreating(true);
    setEditingItem(null);
  };

  const startEdit = (item: ProjectItem) => {
    setFormData({ ...item });
    setEditingItem(item);
    setIsCreating(false);
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.image) return;

    if (isCreating) {
      const newItem: ProjectItem = {
        id: `proj-${Date.now()}`,
        title: formData.title || "Untitled Project",
        category: formData.category || "Web Engineering",
        client: formData.client || "Confidential Client",
        year: formData.year || new Date().getFullYear().toString(),
        image: formData.image || SAMPLE_IMAGES[0].url,
        height: Number(formData.height) || 380,
        description: formData.description || "High-performance project engineered for scalability.",
        deliverables: formData.deliverables && formData.deliverables.length > 0 ? formData.deliverables : ["Digital Architecture", "Web Engineering"],
        specs: formData.specs && formData.specs.length > 0 ? formData.specs : [{ label: "Status", value: "Production Deployed" }],
        accentQuote: formData.accentQuote || "Engineered for maximum conversion and speed.",
        visible: formData.visible !== false,
        order: items.length + 1
      };
      const updated = [...items, newItem];
      setItems(updated);
      onSaveProjects(updated);
      setIsCreating(false);
      showToast(`Added "${newItem.title}" to gallery!`);
    } else if (editingItem) {
      const updated = items.map((item) => {
        if (item.id === editingItem.id) {
          return {
            ...item,
            title: formData.title || item.title,
            category: formData.category || item.category,
            client: formData.client || item.client,
            year: formData.year || item.year,
            image: formData.image || item.image,
            height: Number(formData.height) || item.height,
            description: formData.description || item.description,
            deliverables: formData.deliverables || item.deliverables,
            specs: formData.specs || item.specs,
            accentQuote: formData.accentQuote || item.accentQuote,
            visible: formData.visible !== false
          };
        }
        return item;
      });
      setItems(updated);
      onSaveProjects(updated);
      setEditingItem(null);
      showToast(`Updated "${formData.title}"`);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setFormData((prev) => ({ ...prev, image: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Toast Notification */}
          <AnimatePresence>
            {toastMessage && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed top-6 z-60 px-5 py-2.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 font-mono text-xs shadow-2xl flex items-center gap-2"
              >
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{toastMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Admin Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            className="relative w-full max-w-5xl h-[90vh] max-h-[880px] bg-neutral-950 border border-neutral-800 rounded-[2rem] shadow-2xl z-10 flex flex-col overflow-hidden text-white"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-neutral-800/80 bg-neutral-900/50 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg sm:text-xl font-bold font-display text-white">
                      Portfolio & Showcase Manager
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-semibold uppercase">
                      Private Admin
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 flex items-center gap-1.5 flex-wrap">
                    <span>Add projects, order layout, & toggle visibility.</span>
                    <span className="text-neutral-500">·</span>
                    <span className="text-emerald-400/90 font-mono text-[11px]">URL: /#admin · Shortcut: Ctrl+Shift+A</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleResetDefaults}
                  title="Reset to default showcase"
                  className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
              {/* Left Column: Projects List & Ordering */}
              <div className="w-full md:w-1/2 border-r border-neutral-800/80 flex flex-col h-full overflow-hidden bg-neutral-950/60">
                <div className="p-4 sm:p-5 border-b border-neutral-800/80 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-neutral-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                      Showcase Items ({items.length})
                    </span>
                  </div>
                  <button
                    onClick={startCreate}
                    className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-bold flex items-center gap-1.5 shadow transition-all cursor-pointer glow-button"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Project</span>
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
                  {items.map((item, index) => {
                    const isDeleting = deletePromptId === item.id;
                    return (
                      <div
                        key={item.id}
                        className={`p-3.5 rounded-2xl border transition-all ${
                          item.visible
                            ? "bg-neutral-900/60 border-neutral-800 hover:border-neutral-700"
                            : "bg-neutral-950 border-neutral-900 opacity-60"
                        } flex flex-col gap-3`}
                      >
                        <div className="flex items-center gap-3">
                          {/* Order Number Badge */}
                          <div className="w-7 h-7 rounded-lg bg-neutral-800 flex items-center justify-center text-xs font-mono font-bold text-neutral-300 shrink-0">
                            #{index + 1}
                          </div>

                          {/* Image Thumbnail */}
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-neutral-800 border border-neutral-700/60 shrink-0 relative">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover grayscale contrast-125"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-white truncate font-display">
                              {item.title}
                            </h4>
                            <p className="text-[11px] text-neutral-400 truncate">
                              {item.client || item.category} · <span className="font-mono">{item.height}px</span>
                            </p>
                          </div>

                          {/* Status Pill */}
                          <button
                            onClick={() => handleToggleVisibility(item.id)}
                            title={item.visible ? "Visible in public gallery (Click to Hide)" : "Hidden from public gallery (Click to Enable)"}
                            className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold flex items-center gap-1 cursor-pointer transition-colors ${
                              item.visible
                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                : "bg-neutral-800 text-neutral-400 border border-neutral-700"
                            }`}
                          >
                            {item.visible ? (
                              <>
                                <Eye className="w-3 h-3 text-emerald-400" />
                                <span>Visible</span>
                              </>
                            ) : (
                              <>
                                <EyeOff className="w-3 h-3 text-neutral-500" />
                                <span>Hidden</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Controls & Actions Row */}
                        <div className="flex items-center justify-between pt-2 border-t border-neutral-800/60">
                          {/* Order Up / Down Buttons */}
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleMoveUp(index)}
                              disabled={index === 0}
                              title="Move position up"
                              className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 disabled:pointer-events-none text-neutral-300 hover:text-white transition-colors cursor-pointer"
                            >
                              <ArrowUp className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleMoveDown(index)}
                              disabled={index === items.length - 1}
                              title="Move position down"
                              className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 disabled:pointer-events-none text-neutral-300 hover:text-white transition-colors cursor-pointer"
                            >
                              <ArrowDown className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-[10px] font-mono text-neutral-500 ml-1">
                              Pos: {index + 1} of {items.length}
                            </span>
                          </div>

                          {/* Edit / Delete Buttons */}
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => startEdit(item)}
                              className="px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs flex items-center gap-1 transition-colors cursor-pointer"
                            >
                              <Edit3 className="w-3 h-3 text-neutral-400" />
                              <span>Edit</span>
                            </button>

                            <button
                              onClick={() => setDeletePromptId(isDeleting ? null : item.id)}
                              className="p-1.5 rounded-lg bg-neutral-800/80 hover:bg-red-950/80 hover:text-red-400 text-neutral-400 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Delete Confirmation Prompt */}
                        {isDeleting && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="p-3 rounded-xl bg-red-950/40 border border-red-800/60 mt-1 flex flex-col gap-2"
                          >
                            <div className="flex items-center gap-2 text-red-300 text-xs font-semibold">
                              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                              <span>Delete this project from showcase?</span>
                            </div>
                            <p className="text-[11px] text-neutral-400">
                              Tip: You can simply toggle "Disable" if you just want to hide it temporarily.
                            </p>
                            <div className="flex items-center justify-end gap-2 pt-1">
                              <button
                                onClick={() => setDeletePromptId(null)}
                                className="px-2.5 py-1 rounded-lg bg-neutral-800 text-neutral-300 text-xs hover:bg-neutral-700"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => handleConfirmDelete(item.id)}
                                className="px-3 py-1 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow transition-colors"
                              >
                                Delete Permanently
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Add / Edit Form */}
              <div className="w-full md:w-1/2 flex flex-col h-full overflow-y-auto p-5 sm:p-7 bg-neutral-900/30">
                <div className="mb-5 pb-4 border-b border-neutral-800/80 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-display text-white">
                      {isCreating ? "Add New Project" : editingItem ? `Edit: ${editingItem.title}` : "Select a Project to Edit"}
                    </h3>
                    <p className="text-xs text-neutral-400">
                      {isCreating
                        ? "Configure image, metadata, and positioning in the masonry grid."
                        : editingItem
                        ? "Update details, deliverables, and layout specs."
                        : "Click 'Add Project' or 'Edit' on any item on the left."}
                    </p>
                  </div>
                  {isCreating && (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                      Creating New
                    </span>
                  )}
                </div>

                {(isCreating || editingItem) ? (
                  <form onSubmit={handleSaveForm} className="space-y-4">
                    {/* Project Title */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                        Project Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.title || ""}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g. Next.js 15 Luxury Commerce Hub"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-neutral-500 font-medium"
                      />
                    </div>

                    {/* Client & Year */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                          Client / Brand
                        </label>
                        <input
                          type="text"
                          value={formData.client || ""}
                          onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                          placeholder="e.g. Bintelleapps LLC (San Francisco)"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-neutral-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                          Category / Discipline
                        </label>
                        <input
                          type="text"
                          value={formData.category || ""}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          placeholder="e.g. iOS & Android App Architecture"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-neutral-500"
                        />
                      </div>
                    </div>

                    {/* Image URL & File Picker */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                        Project Image URL *
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="url"
                          required
                          value={formData.image || ""}
                          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                          placeholder="https://images.unsplash.com/photo-..."
                          className="flex-1 px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-neutral-500 font-mono text-xs"
                        />
                        <label className="px-3 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold cursor-pointer shrink-0 flex items-center gap-1.5">
                          <ImageIcon className="w-3.5 h-3.5" />
                          <span>Upload</span>
                          <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                        </label>
                      </div>

                      {/* Quick Presets */}
                      <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] text-neutral-500 font-mono">Quick Presets:</span>
                        {SAMPLE_IMAGES.map((img) => (
                          <button
                            key={img.label}
                            type="button"
                            onClick={() => setFormData({ ...formData, image: img.url })}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 cursor-pointer"
                          >
                            {img.label}
                          </button>
                        ))}
                      </div>

                      {/* Live Image Preview */}
                      {formData.image && (
                        <div className="mt-3 w-full h-36 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 relative">
                          <img
                            src={formData.image}
                            alt="Preview"
                            className="w-full h-full object-cover grayscale contrast-125"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-mono text-neutral-300">
                            Live Preview ({formData.height || 380}px height)
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Masonry Card Height */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                          Masonry Height (px)
                        </label>
                        <select
                          value={formData.height || 380}
                          onChange={(e) => setFormData({ ...formData, height: Number(e.target.value) })}
                          className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-neutral-500"
                        >
                          <option value={280}>280px (Compact)</option>
                          <option value={320}>320px (Standard)</option>
                          <option value={380}>380px (Medium)</option>
                          <option value={440}>440px (Tall)</option>
                          <option value={480}>480px (Hero Showcase)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                          Public Visibility
                        </label>
                        <select
                          value={formData.visible ? "true" : "false"}
                          onChange={(e) => setFormData({ ...formData, visible: e.target.value === "true" })}
                          className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-neutral-500"
                        >
                          <option value="true">Visible in Live Gallery</option>
                          <option value="false">Hidden / Disabled</option>
                        </select>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                        Description
                      </label>
                      <textarea
                        rows={3}
                        value={formData.description || ""}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Detailed overview of technical architecture, conversion lifts, and challenges solved..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-neutral-500 resize-none"
                      />
                    </div>

                    {/* Accent Tagline / Quote */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                        Accent Quote / Highlight
                      </label>
                      <input
                        type="text"
                        value={formData.accentQuote || ""}
                        onChange={(e) => setFormData({ ...formData, accentQuote: e.target.value })}
                        placeholder="e.g. Zero-memory image delta sync and Apple Pay checkout architecture."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-neutral-500"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 flex items-center justify-end gap-3 border-t border-neutral-800">
                      <button
                        type="button"
                        onClick={() => {
                          setIsCreating(false);
                          setEditingItem(null);
                        }}
                        className="px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-semibold"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors shadow flex items-center gap-2 cursor-pointer glow-button"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>{isCreating ? "Add to Gallery" : "Save Changes"}</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 border border-dashed border-neutral-800 rounded-2xl">
                    <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-500 mb-3">
                      <Sparkles className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1 font-display">
                      Ready to manage projects
                    </h4>
                    <p className="text-xs text-neutral-400 max-w-xs mb-5">
                      Select an existing project from the left to edit or click below to create a new case study.
                    </p>
                    <button
                      onClick={startCreate}
                      className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-colors flex items-center gap-2 shadow"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Create New Project</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
