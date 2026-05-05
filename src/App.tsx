/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { questions, Question } from './data/questions';
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  History,
  Info,
  LayoutDashboard,
  Play,
  RotateCcw,
  Trophy,
  XCircle,
  Hash
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type AppState = 'landing' | 'subject-selection' | 'quiz' | 'browse' | 'summary';
type Subject = 'Satellite Communication' | 'Radar';

export default function App() {
  const [view, setViewState] = useState<AppState>('landing');
  const [selectedSubject, setSelectedSubject] = useState<Subject>('Satellite Communication');
  const [currentQuiz, setCurrentQuiz] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);

  // Stats
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);

  const startQuiz = (count: number = 100, subject: Subject = selectedSubject) => {
    const filtered = questions.filter(q => q.subject === subject);
    let shuffled = [...filtered].sort(() => 0.5 - Math.random());
    if (count < filtered.length) {
      shuffled = shuffled.slice(0, count);
    }
    setCurrentQuiz(shuffled);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswers({});
    setScore(0);
    setViewState('quiz');
  };

  const handleAnswer = (optionIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(optionIndex);
    const newAnswers = { ...answers, [currentQuiz[currentIndex].id]: optionIndex };
    setAnswers(newAnswers);

    if (optionIndex === currentQuiz[currentIndex].answer) {
      setScore(score + 1);
    }
    
    setTotalQuestionsAnswered(prev => prev + 1);
  };

  const nextQuestion = () => {
    if (currentIndex < currentQuiz.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(answers[currentQuiz[currentIndex + 1]?.id] ?? null);
    } else {
      setViewState('summary');
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedAnswer(answers[currentQuiz[currentIndex - 1].id]);
    }
  };

  return (
    <div id="app-container" className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header id="main-header" className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div 
            id="logo" 
            className="flex cursor-pointer items-center space-x-2"
            onClick={() => setViewState('landing')}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
              <ClipboardList size={24} />
            </div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {selectedSubject === 'Satellite Communication' ? 'SatCom' : 'Radar'} Quiz Master
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setViewState('landing')}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${view === 'landing' ? 'text-blue-600' : 'text-slate-500'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setViewState('browse')}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${view === 'browse' ? 'text-blue-600' : 'text-slate-500'}`}
            >
              Study Mode
            </button>
          </nav>

          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Progress</span>
              <span className="text-sm font-semibold text-blue-600">{totalQuestionsAnswered} Solved</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <AnimatePresence mode="wait">
          {view === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12 py-10"
            >
              {/* Hero Section */}
              <section id="hero" className="text-center space-y-6">
                <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Master Your Engineering Subjects
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-slate-600">
                  Select a subject to begin your preparation with comprehensive MCQs and detailed explanations.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
                  <SubjectCard 
                    title="Satellite Communication" 
                    desc="100 Questions on Multiple Access, Earth Station, GPS" 
                    icon={<ClipboardList size={32} />}
                    active={selectedSubject === 'Satellite Communication'}
                    onClick={() => {
                      setSelectedSubject('Satellite Communication');
                      setViewState('subject-selection');
                    }}
                  />
                  <SubjectCard 
                    title="Radar" 
                    desc="100 Questions on Clutter, Tracking, Receivers, Navigation Aids" 
                    icon={<Play size={32} />}
                    active={selectedSubject === 'Radar'}
                    onClick={() => {
                      setSelectedSubject('Radar');
                      setViewState('subject-selection');
                    }}
                  />
                </div>
              </section>
            </motion.div>
          )}

          {view === 'subject-selection' && (
            <motion.div
              key="subject-selection"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-12 py-10"
            >
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setViewState('landing')}
                  className="rounded-full bg-white p-2 text-slate-500 shadow hover:text-blue-600"
                >
                  <ChevronLeft size={24} />
                </button>
                <h2 className="text-3xl font-bold text-slate-900">{selectedSubject} Prep</h2>
              </div>

              {/* Hero for Selected Subject */}
              <section id="hero-subject" className="text-center space-y-6">
                <p className="mx-auto max-w-2xl text-lg text-slate-600">
                  Ready to test your knowledge in {selectedSubject}? Choose a practice mode below.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    id="start-full-quiz"
                    onClick={() => startQuiz(100)}
                    className="flex items-center space-x-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-100 transition-all hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <Play size={20} fill="currentColor" />
                    <span>Start Exam (Full)</span>
                  </button>
                  <button
                    id="browse-all"
                    onClick={() => setViewState('browse')}
                    className="flex items-center space-x-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-700 border border-slate-200 shadow-lg transition-all hover:scale-105 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
                  >
                    <BookOpen size={20} />
                    <span>Study List</span>
                  </button>
                </div>
              </section>

              {/* Quick Practise */}
              <section id="quick-practice" className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <PracticeCard 
                  title="Flash Session" 
                  desc="10 random questions" 
                  count={10} 
                  icon={<History size={24} />} 
                  onClick={() => startQuiz(10)} 
                />
                <PracticeCard 
                  title="The Sprint" 
                  desc="25 focused questions" 
                  count={25} 
                  icon={<LayoutDashboard size={24} />} 
                  onClick={() => startQuiz(25)} 
                />
                <PracticeCard 
                  title="Full Review" 
                  desc="50 comprehensive items" 
                  count={50} 
                  icon={<ClipboardList size={24} />} 
                  onClick={() => startQuiz(50)} 
                />
              </section>

              {/* Module Previews */}
              <section id="modules" className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">Topics covered</h3>
                {selectedSubject === 'Satellite Communication' ? (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <ModuleBox color="bg-indigo-50 text-indigo-700" title="Multiple Access" range="1-33" items="FDMA, TDMA, CDMA, ALOHA" />
                    <ModuleBox color="bg-emerald-50 text-emerald-700" title="Earth Station Tech" range="34-67" items="Antennas, HPAs, LNAs, Tracking" />
                    <ModuleBox color="bg-amber-50 text-amber-700" title="GPS & Navigation" range="68-100" items="Ranging, Constellations, Errors" />
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <ModuleBox color="bg-rose-50 text-rose-700" title="Radar Basics" range="101-110" items="Clutter, Theory, Radar Equation" />
                    <ModuleBox color="bg-sky-50 text-sky-700" title="Tracking & Search" range="110-136" items="Lobing, Conical Scan, Monopulse, TWS" />
                    <ModuleBox color="bg-teal-50 text-teal-700" title="Receivers & Aids" range="145-200" items="Displays, Duplexers, ILS, VOR, DME, LORAN" />
                  </div>
                )}
              </section>
            </motion.div>
          )}

          {view === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mx-auto max-w-3xl space-y-6"
            >
              {/* Progress Bar */}
              <div id="quiz-progress-container" className="space-y-2">
                <div className="flex items-center justify-between text-sm font-bold text-slate-500">
                  <span>Question {currentIndex + 1} of {currentQuiz.length}</span>
                  <span className="text-blue-600">{Math.round(((currentIndex + 1) / currentQuiz.length) * 100)}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                  <motion.div 
                    className="h-full bg-blue-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / currentQuiz.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <div id={`question-${currentQuiz[currentIndex].id}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
                <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-4">
                  {currentQuiz[currentIndex].category}
                </span>
                <h3 className="mb-8 text-xl font-bold leading-relaxed text-slate-800 sm:text-2xl">
                  {currentQuiz[currentIndex].question}
                </h3>

                <div className="space-y-3">
                  {currentQuiz[currentIndex].options.map((option, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === currentQuiz[currentIndex].answer;
                    
                    let bgClass = "bg-white border-slate-200 hover:border-blue-300 hover:bg-blue-50";
                    let textClass = "text-slate-700";
                    let icon = null;

                    if (selectedAnswer !== null) {
                      if (isCorrect) {
                        bgClass = "bg-emerald-50 border-emerald-500 shadow-sm";
                        textClass = "text-emerald-700 font-bold";
                        icon = <CheckCircle2 size={20} className="text-emerald-500" />;
                      } else if (isSelected) {
                        bgClass = "bg-rose-50 border-rose-500 shadow-sm";
                        textClass = "text-rose-700 font-bold";
                        icon = <XCircle size={20} className="text-rose-500" />;
                      } else {
                        bgClass = "bg-white border-slate-100 opacity-50";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        id={`option-${idx}`}
                        disabled={selectedAnswer !== null}
                        onClick={() => handleAnswer(idx)}
                        className={`flex w-full items-center justify-between rounded-2xl border-2 p-4 text-left transition-all sm:p-5 ${bgClass} ${textClass}`}
                      >
                        <span className="flex items-center">
                          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg mr-4 text-sm font-bold ${isSelected ? 'bg-current text-white' : 'bg-slate-100 text-slate-500'}`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          {option}
                        </span>
                        {icon}
                      </button>
                    );
                  })}
                </div>

                {selectedAnswer !== null && currentQuiz[currentIndex].explanation && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6 border-t border-slate-100 pt-6"
                  >
                    <div className="flex space-x-3 rounded-2xl bg-blue-50 p-4">
                      <Info className="shrink-0 text-blue-600" size={20} />
                      <p className="text-sm text-blue-700">
                        <span className="font-bold">Note: </span>
                        {currentQuiz[currentIndex].explanation}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between py-2">
                <button
                  id="prev-button"
                  onClick={prevQuestion}
                  disabled={currentIndex === 0}
                  className="flex items-center space-x-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-bold text-slate-600 transition-all hover:bg-slate-50 disabled:opacity-30"
                >
                  <ChevronLeft size={20} />
                  <span>Previous</span>
                </button>
                <button
                  id="next-button"
                  onClick={nextQuestion}
                  disabled={selectedAnswer === null}
                  className="flex items-center space-x-2 rounded-xl bg-slate-900 px-8 py-3 font-bold text-white transition-all hover:bg-slate-800 disabled:opacity-30"
                >
                  <span>{currentIndex === currentQuiz.length - 1 ? 'Finish Exam' : 'Next Question'}</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {view === 'summary' && (
            <motion.div
              key="summary"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mx-auto max-w-2xl text-center space-y-8"
            >
              <div id="summary-card" className="rounded-3xl border border-slate-200 bg-white p-10 shadow-2xl">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                  <Trophy size={48} />
                </div>
                <h3 className="mb-2 text-3xl font-extrabold text-slate-900">Quiz Completed!</h3>
                <p className="text-slate-500 mb-8">Here is how you performed on the selected questions:</p>
                
                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="rounded-2xl bg-emerald-50 p-6">
                    <div className="text-3xl font-black text-emerald-600">{score}</div>
                    <div className="text-sm font-bold text-emerald-700 uppercase tracking-tight">Correct</div>
                  </div>
                  <div className="rounded-2xl bg-rose-50 p-6">
                    <div className="text-3xl font-black text-rose-600">{currentQuiz.length - score}</div>
                    <div className="text-sm font-bold text-rose-700 uppercase tracking-tight">Incorrect</div>
                  </div>
                </div>

                <div className="relative mx-auto h-40 w-40">
                  <svg className="h-full w-full rotate-[-90deg]">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="transparent"
                      stroke="#f1f5f9"
                      strokeWidth="12"
                    />
                    <motion.circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="transparent"
                      stroke="#2563eb"
                      strokeWidth="12"
                      strokeDasharray={440}
                      initial={{ strokeDashoffset: 440 }}
                      animate={{ strokeDashoffset: 440 - (440 * (score / currentQuiz.length)) }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-slate-900">{Math.round((score / currentQuiz.length) * 100)}%</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  id="restart-quiz"
                  onClick={() => startQuiz(currentQuiz.length)}
                  className="flex items-center space-x-2 rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700"
                >
                  <RotateCcw size={20} />
                  <span>Try Again</span>
                </button>
                <button
                  id="back-home"
                  onClick={() => setViewState('landing')}
                  className="flex items-center space-x-2 rounded-full bg-white px-8 py-4 font-bold text-slate-700 border border-slate-200 shadow-md transition-all hover:scale-105"
                >
                  <LayoutDashboard size={20} />
                  <span>Dashboard</span>
                </button>
              </div>
            </motion.div>
          )}

          {view === 'browse' && (
            <motion.div
              key="browse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">Study Mode</h3>
                  <p className="text-slate-500">Review all {questions.filter(q => q.subject === selectedSubject).length} questions and their correct answers.</p>
                </div>
                <button 
                  onClick={() => setViewState('subject-selection')}
                  className="flex items-center space-x-2 rounded-xl bg-slate-100 px-4 py-2 font-bold text-slate-600 transition-hover hover:bg-slate-200"
                >
                  <ChevronLeft size={18} />
                  <span>Back</span>
                </button>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {questions.filter(q => q.subject === selectedSubject).map((q, idx) => (
                  <div key={q.id} id={`study-q-${q.id}`} className="flex space-x-4 rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-lg">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-500">
                      {idx + 1}
                    </div>
                    <div className="space-y-3">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-blue-500">{q.category}</span>
                      <h4 className="font-bold leading-tight text-slate-800">{q.question}</h4>
                      <p className="text-sm font-bold text-emerald-600">
                        <CheckCircle2 size={16} className="inline mr-1" />
                        Ans: {q.options[q.answer]}
                      </p>
                      {q.explanation && (
                        <p className="text-xs italic text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100">
                          {q.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="mt-20 border-t border-slate-200 bg-white py-12 px-6">
        <div className="mx-auto max-w-7xl text-center text-slate-400">
          <p className="text-sm">Created for Engineering Exam Prep</p>
          <div className="mt-4 flex justify-center space-x-4">
             <div className="flex items-center space-x-1">
                <Hash size={14} />
                <span>200 Total MCQs</span>
             </div>
             <span>•</span>
             <span>Satellite Comm & Radar</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SubjectCard({ title, desc, icon, active, onClick }: { title: string; desc: string; icon: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative w-full max-w-xs overflow-hidden rounded-3xl border-2 p-8 transition-all hover:scale-[1.02] text-left shadow-lg ${
        active ? 'border-blue-600 bg-blue-50 ring-4 ring-blue-100' : 'border-slate-100 bg-white hover:border-blue-200'
      }`}
    >
      <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${active ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400'}`}>
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
      {active && (
        <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-blue-600 animate-pulse" />
      )}
    </button>
  );
}

function PracticeCard({ title, desc, icon, onClick, count }: { title: string; desc: string; icon: React.ReactNode; onClick: () => void; count: number }) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-50 text-left"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>
      <h4 className="mb-1 text-xl font-bold text-slate-800">{title}</h4>
      <p className="text-slate-500">{desc}</p>
      <div className="mt-6 flex items-center text-sm font-bold text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
        <span>Start Practice</span>
        <ChevronRight size={16} className="ml-1" />
      </div>
    </button>
  );
}

function ModuleBox({ color, title, range, items }: { color: string; title: string, range: string, items: string }) {
  return (
    <div className={`rounded-3xl p-6 transition-all hover:scale-[1.02] ${color}`}>
      <div className="mb-2 flex items-center justify-between">
        <h4 className="font-bold uppercase tracking-wider opacity-80">{title}</h4>
        <span className="text-xs font-black">Q. {range}</span>
      </div>
      <p className="text-sm font-medium leading-relaxed opacity-60">
        {items}
      </p>
    </div>
  );
}

