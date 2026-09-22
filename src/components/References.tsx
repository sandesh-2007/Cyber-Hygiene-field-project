import React, { useState } from 'react';
import { 
  BookMarked, 
  Plus, 
  X, 
  ExternalLink, 
  Pencil, 
  Trash2, 
  Check 
} from 'lucide-react';
import { INITIAL_REFERENCES, ReferenceItem } from '../data/projectData';

export const References: React.FC = () => {
  const [references, setReferences] = useState<ReferenceItem[]>(() => {
    const saved = localStorage.getItem('cyber_hygiene_references');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse references', e);
      }
    }
    return INITIAL_REFERENCES;
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<ReferenceItem | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newForm, setNewForm] = useState<Omit<ReferenceItem, 'id'>>({
    title: '',
    authors: '',
    publication: '',
    year: '2024',
    doiOrUrl: ''
  });

  const saveToLocal = (items: ReferenceItem[]) => {
    setReferences(items);
    localStorage.setItem('cyber_hygiene_references', JSON.stringify(items));
  };

  const handleStartEdit = (ref: ReferenceItem) => {
    setEditingId(ref.id);
    setEditForm({ ...ref });
  };

  const handleSaveEdit = () => {
    if (!editForm) return;
    const updated = references.map(r => r.id === editForm.id ? editForm : r);
    saveToLocal(updated);
    setEditingId(null);
    setEditForm(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm(null);
  };

  const handleDelete = (id: string) => {
    const updated = references.filter(r => r.id !== id);
    saveToLocal(updated);
  };

  const handleAddReference = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newForm.title || !newForm.authors) return;
    const newItem: ReferenceItem = {
      id: `REF${Date.now().toString().slice(-4)}`,
      ...newForm
    };
    saveToLocal([...references, newItem]);
    setNewForm({
      title: '',
      authors: '',
      publication: '',
      year: '2024',
      doiOrUrl: ''
    });
    setIsAdding(false);
  };

  return (
    <section id="references" className="py-24 bg-white border-t border-neutral-200 text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Add Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[5px] text-xs font-mono font-semibold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
              <BookMarked className="w-3.5 h-3.5 text-red-600" />
              <span>Scholarly Foundation</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950">
              Academic References
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Peer-reviewed frameworks, national guidelines, and educational threat reports informing our survey construction.
              Each reference is editable to customize citations for institutional submission.
            </p>
          </div>

          <div>
            <button
              onClick={() => setIsAdding(!isAdding)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[5px] text-xs font-bold uppercase tracking-wider text-red-700 bg-white border border-neutral-300 hover:border-red-600 hover:text-red-600 shadow-xs transition-all"
            >
              {isAdding ? <X className="w-4 h-4 text-red-600" /> : <Plus className="w-4 h-4 text-red-600" />}
              <span>{isAdding ? 'Close Form' : 'Add Reference'}</span>
            </button>
          </div>
        </div>

        {/* Add Reference Form */}
        {isAdding && (
          <form onSubmit={handleAddReference} className="mt-8 p-6 rounded-[5px] bg-white border border-red-600/40 shadow-sm space-y-4">
            <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-red-600">
              Add New Citation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-neutral-600 font-mono block mb-1">Document / Paper Title *</label>
                <input
                  type="text"
                  required
                  value={newForm.title}
                  onChange={e => setNewForm({ ...newForm, title: e.target.value })}
                  placeholder="e.g. NIST Special Publication 800-63B"
                  className="w-full px-3.5 py-2 rounded-[5px] bg-white border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:border-red-500 shadow-xs"
                />
              </div>

              <div>
                <label className="text-xs text-neutral-600 font-mono block mb-1">Author(s) / Organization *</label>
                <input
                  type="text"
                  required
                  value={newForm.authors}
                  onChange={e => setNewForm({ ...newForm, authors: e.target.value })}
                  placeholder="e.g. National Institute of Standards and Technology"
                  className="w-full px-3.5 py-2 rounded-[5px] bg-white border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:border-red-500 shadow-xs"
                />
              </div>

              <div>
                <label className="text-xs text-neutral-600 font-mono block mb-1">Publication / Series</label>
                <input
                  type="text"
                  value={newForm.publication}
                  onChange={e => setNewForm({ ...newForm, publication: e.target.value })}
                  placeholder="e.g. IEEE Transactions on Cyber Hygiene"
                  className="w-full px-3.5 py-2 rounded-[5px] bg-white border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:border-red-500 shadow-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-neutral-600 font-mono block mb-1">Year</label>
                  <input
                    type="text"
                    value={newForm.year}
                    onChange={e => setNewForm({ ...newForm, year: e.target.value })}
                    placeholder="2024"
                    className="w-full px-3.5 py-2 rounded-[5px] bg-white border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:border-red-500 shadow-xs"
                  />
                </div>
                <div>
                  <label className="text-xs text-neutral-600 font-mono block mb-1">DOI or Web URL</label>
                  <input
                    type="text"
                    value={newForm.doiOrUrl}
                    onChange={e => setNewForm({ ...newForm, doiOrUrl: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3.5 py-2 rounded-[5px] bg-white border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:border-red-500 shadow-xs"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="px-4 py-2 rounded-[5px] text-xs font-mono text-neutral-600 hover:text-neutral-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-[5px] text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save Citation</span>
              </button>
            </div>
          </form>
        )}

        {/* References List */}
        <div className="mt-8 space-y-3">
          {references.map((item, index) => {
            const isEditing = editingId === item.id;

            if (isEditing && editForm) {
              return (
                <div key={item.id} className="p-6 rounded-[5px] bg-white border border-red-600/50 shadow-sm space-y-4">
                  <span className="text-xs font-mono text-red-600 font-bold uppercase">Editing Reference [{index + 1}]</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-neutral-600 font-mono block mb-1">Title</label>
                      <input
                        type="text"
                        value={editForm.title}
                        onChange={e => setEditForm({ ...editForm, title: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-[5px] bg-white border border-neutral-300 text-xs text-neutral-900 shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-neutral-600 font-mono block mb-1">Authors</label>
                      <input
                        type="text"
                        value={editForm.authors}
                        onChange={e => setEditForm({ ...editForm, authors: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-[5px] bg-white border border-neutral-300 text-xs text-neutral-900 shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-neutral-600 font-mono block mb-1">Publication</label>
                      <input
                        type="text"
                        value={editForm.publication}
                        onChange={e => setEditForm({ ...editForm, publication: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-[5px] bg-white border border-neutral-300 text-xs text-neutral-900 shadow-xs"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-neutral-600 font-mono block mb-1">Year</label>
                        <input
                          type="text"
                          value={editForm.year}
                          onChange={e => setEditForm({ ...editForm, year: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-[5px] bg-white border border-neutral-300 text-xs text-neutral-900 shadow-xs"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-neutral-600 font-mono block mb-1">DOI / Link</label>
                        <input
                          type="text"
                          value={editForm.doiOrUrl}
                          onChange={e => setEditForm({ ...editForm, doiOrUrl: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-[5px] bg-white border border-neutral-300 text-xs text-neutral-900 shadow-xs"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="px-3.5 py-1.5 rounded-[5px] text-xs font-mono text-neutral-600 hover:text-neutral-900"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveEdit}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-[5px] text-xs font-bold text-white bg-red-600 hover:bg-red-700"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className="p-5 sm:p-6 rounded-[5px] bg-white border border-neutral-200 hover:border-red-600/60 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-red-600">[{index + 1}]</span>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-950">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    <span className="text-neutral-900 font-medium">{item.authors}</span> ({item.year}). <em>{item.publication}</em>.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center font-mono text-xs">
                  {item.doiOrUrl && (
                    <a
                      href={item.doiOrUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[5px] bg-neutral-100 text-neutral-600 hover:text-red-600 hover:bg-neutral-200 transition-colors"
                      title="Open citation source"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>LINK</span>
                    </a>
                  )}

                  <button
                    onClick={() => handleStartEdit(item)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[5px] bg-neutral-100 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200 transition-colors"
                    title="Edit reference"
                  >
                    <Pencil className="w-3 h-3" />
                    <span>EDIT</span>
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[5px] bg-neutral-100 text-neutral-600 hover:text-red-600 hover:bg-neutral-200 transition-colors"
                    title="Delete citation"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>DEL</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


