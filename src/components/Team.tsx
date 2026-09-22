import React, { useState } from 'react';
import { 
  Users, 
  Pencil, 
  Check, 
  Mail, 
  Shield, 
  BookOpen, 
  BarChart3, 
  Code, 
  MapPin, 
  GraduationCap 
} from 'lucide-react';
import { INITIAL_TEAM, TeamMember } from '../data/projectData';

const getRoleIcon = (role: string) => {
  if (role.includes("PROJECT LEAD")) return Shield;
  if (role.includes("RESEARCH")) return BookOpen;
  if (role.includes("SURVEY") || role.includes("ANALYSIS")) return BarChart3;
  if (role.includes("DEVELOPMENT")) return Code;
  if (role.includes("FIELD")) return MapPin;
  if (role.includes("FACULTY")) return GraduationCap;
  return Users;
};

export const Team: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>(() => {
    const saved = localStorage.getItem('cyber_hygiene_team');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse team', e);
      }
    }
    return INITIAL_TEAM;
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<TeamMember | null>(null);

  const saveToLocal = (members: TeamMember[]) => {
    setTeam(members);
    localStorage.setItem('cyber_hygiene_team', JSON.stringify(members));
  };

  const handleStartEdit = (member: TeamMember) => {
    setEditingId(member.id);
    setEditForm({ ...member });
  };

  const handleSave = () => {
    if (!editForm) return;
    const updated = team.map(m => m.id === editForm.id ? editForm : m);
    saveToLocal(updated);
    setEditingId(null);
    setEditForm(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm(null);
  };

  return (
    <section id="team" className="py-24 bg-white border-t border-neutral-200 text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[5px] text-xs font-mono font-semibold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200">
              <Users className="w-3.5 h-3.5 text-red-600" />
              <span>Project Investigators</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950">
              Research & Field Team
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Collegiate project team responsible for questionnaire construction, field data gathering, 
              statistical synthesis, and institutional reporting.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-500">
            Click any member card to edit names for submission
          </div>
        </div>

        {/* 6 Team Roles Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => {
            const isEditing = editingId === member.id;
            const isFaculty = member.role.includes("FACULTY GUIDE");
            const RoleIcon = getRoleIcon(member.role);

            if (isEditing && editForm) {
              return (
                <div
                  key={member.id}
                  className="p-6 rounded-[5px] bg-white border-2 border-red-600 space-y-3.5 shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-red-700 font-bold uppercase block">
                      Editing {member.role}
                    </span>
                    <RoleIcon className="w-4 h-4 text-red-600" />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-neutral-600 block mb-1">Full Name</label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={e => setEditForm({ ...editForm, name: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-[5px] bg-white border border-neutral-300 text-xs text-neutral-900 shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-neutral-600 block mb-1">Department</label>
                    <input
                      type="text"
                      value={editForm.department}
                      onChange={e => setEditForm({ ...editForm, department: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-[5px] bg-white border border-neutral-300 text-xs text-neutral-900 shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-neutral-600 block mb-1">College / University</label>
                    <input
                      type="text"
                      value={editForm.college}
                      onChange={e => setEditForm({ ...editForm, college: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-[5px] bg-white border border-neutral-300 text-xs text-neutral-900 shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-neutral-600 block mb-1">Institutional Email</label>
                    <input
                      type="text"
                      value={editForm.email}
                      onChange={e => setEditForm({ ...editForm, email: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-[5px] bg-white border border-neutral-300 text-xs text-neutral-900 shadow-xs"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      onClick={handleCancel}
                      className="px-3 py-1.5 rounded-[5px] text-xs font-mono text-neutral-600 hover:text-neutral-900"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[5px] text-xs font-bold text-white bg-red-600 hover:bg-red-700 shadow-xs"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={member.id}
                onClick={() => handleStartEdit(member)}
                className={`p-6 sm:p-7 rounded-[5px] bg-white border transition-all flex flex-col justify-between group cursor-pointer relative overflow-hidden shadow-xs hover:shadow-md ${
                  isFaculty 
                    ? 'border-red-600/50 hover:border-red-600' 
                    : 'border-neutral-200 hover:border-red-600'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-red-700 px-2.5 py-1 rounded-[5px] bg-red-100/70 border border-red-200">
                      <RoleIcon className="w-3 h-3 text-red-600" />
                      <span>{member.role}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleStartEdit(member);
                      }}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-[5px] bg-white border border-neutral-200 text-neutral-500 hover:text-neutral-900 font-mono text-[10px]"
                      title="Edit this team member"
                    >
                      <Pencil className="w-2.5 h-2.5" />
                      <span>EDIT</span>
                    </button>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-950 mb-1 group-hover:text-red-600 transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-xs text-neutral-700 leading-snug">
                    {member.department}
                  </p>

                  <p className="text-xs text-neutral-500 mt-1">
                    {member.college}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-600">
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-red-600" />
                    <span className="truncate max-w-[200px]">{member.email}</span>
                  </div>
                  <span className="text-[10px] text-neutral-400 group-hover:text-neutral-700 flex items-center gap-0.5">
                    <Pencil className="w-2.5 h-2.5" />
                    <span>Edit</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


