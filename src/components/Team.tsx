import React, { useEffect } from 'react';
import { 
  Users, 
  Mail, 
  Shield, 
  BookOpen, 
  Code, 
  MapPin, 
  GraduationCap,
  BarChart3
} from 'lucide-react';
import { INITIAL_TEAM, TeamMember } from '../data/projectData';

const getRoleIcon = (role: string) => {
  if (role.includes("FACULTY")) return GraduationCap;
  if (role.includes("PROJECT LEAD")) return Shield;
  if (role.includes("RESEARCH")) return BookOpen;
  if (role.includes("DEVELOPMENT")) return Code;
  if (role.includes("FIELD")) return MapPin;
  if (role.includes("SURVEY") || role.includes("ANALYSIS") || role.includes("DATA")) return BarChart3;
  return Users;
};

export const Team: React.FC = () => {
  // Clear any legacy local storage data that may contain obsolete placeholder cards
  useEffect(() => {
    try {
      localStorage.removeItem('cyber_hygiene_team');
    } catch {
      // Ignore if localStorage unavailable
    }
  }, []);

  const teamMembers: TeamMember[] = INITIAL_TEAM;

  return (
    <section 
      id="team" 
      className="py-24 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900">
              <Users className="w-3.5 h-3.5 text-red-600" />
              <span>Project Investigators</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 dark:text-white">
              Research & Field Team
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              Collegiate project team responsible for academic supervision, questionnaire construction, field data gathering, 
              statistical synthesis, web platform development, and institutional reporting.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 self-start md:self-auto">
            Thakur Shyamnarayan Degree College
          </div>
        </div>

        {/* Team Members Grid (6 Dedicated Members) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => {
            const isFaculty = member.role.includes("FACULTY GUIDE");
            const RoleIcon = getRoleIcon(member.role);

            return (
              <div
                key={member.id}
                className={`p-6 sm:p-7 bg-white dark:bg-neutral-950 border transition-all flex flex-col justify-between group relative overflow-hidden shadow-xs hover:border-red-600 ${
                  isFaculty 
                    ? 'border-red-600/70 dark:border-red-600/80 bg-red-50/20 dark:bg-red-950/20' 
                    : 'border-neutral-300 dark:border-neutral-800'
                }`}
              >
                <div>
                  {/* Role Header Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-red-700 dark:text-red-400 px-2.5 py-1 bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900">
                      <RoleIcon className="w-3.5 h-3.5 text-red-600" />
                      <span>{member.role}</span>
                    </div>

                    {isFaculty && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-600 dark:text-red-400 px-2 py-0.5 border border-red-300 dark:border-red-800 bg-red-50/50 dark:bg-red-950/30">
                        SUPERVISOR
                      </span>
                    )}
                  </div>

                  {/* Member Name */}
                  <h3 className="text-xl font-black text-neutral-950 dark:text-white uppercase tracking-tight group-hover:text-red-600 transition-colors">
                    {member.name}
                  </h3>

                  {/* Department */}
                  <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-snug mt-2 font-medium">
                    {member.department}
                  </p>

                  {/* College */}
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    {member.college}
                  </p>
                </div>

                {/* Email Footer Link */}
                <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs font-mono">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400 transition-colors truncate max-w-full"
                    title={`Email ${member.name}`}
                  >
                    <Mail className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
