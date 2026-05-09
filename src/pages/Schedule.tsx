import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Users, ArrowRight, ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, addDays } from "date-fns";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import useScrollAnimation from "@/hooks/useScrollAnimation";

// Mock schedule data - in real app this would come from a database
const generateScheduleData = () => {
  const today = new Date();
  const sessions = [
    { title: "Morning Sound Bath", time: "7:00 AM", duration: "60 min", type: "sound", price: "₹1,800", spots: 8 },
    { title: "Breathwork Circle", time: "9:00 AM", duration: "75 min", type: "breath", price: "₹1,500", spots: 6 },
    { title: "Guided Meditation", time: "11:00 AM", duration: "45 min", type: "meditation", price: "₹1,200", spots: 10 },
    { title: "Evening Sound Healing", time: "6:00 PM", duration: "90 min", type: "sound", price: "₹2,200", spots: 8 },
    { title: "Sunset Breathwork", time: "5:30 PM", duration: "60 min", type: "breath", price: "₹1,500", spots: 6 },
    { title: "Deep Rest Meditation", time: "7:30 PM", duration: "60 min", type: "meditation", price: "₹1,200", spots: 10 },
  ];
  
  const schedule: Record<string, typeof sessions> = {};
  
  // Generate sessions for the next 60 days
  for (let i = 1; i <= 60; i++) {
    const date = addDays(today, i);
    const dayOfWeek = date.getDay();
    
    // Different sessions on different days
    if (dayOfWeek === 0) { // Sunday - limited
      schedule[format(date, 'yyyy-MM-dd')] = [sessions[0], sessions[5]];
    } else if (dayOfWeek === 6) { // Saturday
      schedule[format(date, 'yyyy-MM-dd')] = [sessions[0], sessions[2], sessions[3]];
    } else { // Weekdays
      const daySessions = [sessions[i % 2 === 0 ? 0 : 1], sessions[2], sessions[i % 2 === 0 ? 3 : 4]];
      if (i % 3 === 0) daySessions.push(sessions[5]);
      schedule[format(date, 'yyyy-MM-dd')] = daySessions;
    }
  }
  
  return schedule;
};

const scheduleData = generateScheduleData();

const sessionTypes = [
  { id: 'all', label: 'All Sessions', color: 'clay' },
  { id: 'sound', label: 'Sound Healing', color: 'clay' },
  { id: 'breath', label: 'Breathwork', color: 'earth' },
  { id: 'meditation', label: 'Meditation', color: 'muted' },
];

const Schedule = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref: calendarRef, isVisible: calendarVisible } = useScrollAnimation();
  const { ref: sessionsRef, isVisible: sessionsVisible } = useScrollAnimation();

  useEffect(() => {
    setLoaded(true);
    // Set default selected date to tomorrow
    setSelectedDate(addDays(new Date(), 1));
  }, []);

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  const startDay = startOfMonth(currentMonth).getDay();
  
  const getSessionsForDate = (date: Date) => {
    const dateKey = format(date, 'yyyy-MM-dd');
    const sessions = scheduleData[dateKey] || [];
    if (activeFilter === 'all') return sessions;
    return sessions.filter(s => s.type === activeFilter);
  };

  const hasSessionsOnDate = (date: Date) => {
    const dateKey = format(date, 'yyyy-MM-dd');
    return scheduleData[dateKey] && scheduleData[dateKey].length > 0;
  };

  const selectedDateSessions = selectedDate ? getSessionsForDate(selectedDate) : [];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
        
        {/* Floating elements */}
        <div className="absolute top-1/3 left-10 w-1 h-20 bg-gradient-to-b from-clay/30 to-transparent animate-float" />
        <div className="absolute top-1/4 right-20 w-1 h-16 bg-gradient-to-b from-clay/20 to-transparent animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent animate-pulse-soft" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-clay/10 rounded-full blur-[50px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-earth/10 rounded-full blur-[40px] animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-2xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`w-px h-12 bg-gradient-to-b from-transparent via-clay to-clay/30 mb-8 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
            
            <span className="text-xs tracking-[0.3em] uppercase text-clay mb-6 block">
              Book Your Session
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Schedule
              <span className="block mt-2 text-clay">& Availability</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Browse our upcoming sessions and reserve your spot. Each gathering is limited 
              to ensure a deeply personal experience.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section ref={calendarRef} className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-foreground/[0.02] to-transparent" />
        
        <div className="container mx-auto px-6">
          {/* Filter Tabs */}
          <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-700 ${calendarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {sessionTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveFilter(type.id)}
                className={`px-5 py-2.5 text-sm border transition-all duration-300 ${
                  activeFilter === type.id
                    ? 'border-clay bg-clay/10 text-clay'
                    : 'border-foreground/10 hover:border-clay/30 text-muted-foreground hover:text-foreground'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Calendar */}
            <div className={`transition-all duration-700 delay-100 ${calendarVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="border border-foreground/10 p-6 md:p-8 relative">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-clay/30" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-clay/30" />
                
                {/* Month Navigation */}
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                    className="p-2 border border-foreground/10 hover:border-clay/30 hover:bg-clay/10 transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <h3 className="font-serif text-2xl">
                    {format(currentMonth, 'MMMM yyyy')}
                  </h3>
                  <button
                    onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                    className="p-2 border border-foreground/10 hover:border-clay/30 hover:bg-clay/10 transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center text-xs tracking-[0.15em] uppercase text-muted-foreground py-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1">
                  {/* Empty cells for days before the month starts */}
                  {Array.from({ length: startDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square" />
                  ))}
                  
                  {/* Days of the month */}
                  {daysInMonth.map((day) => {
                    const hasSessions = hasSessionsOnDate(day);
                    const isSelected = selectedDate && isSameDay(day, selectedDate);
                    const isPast = day < new Date() && !isToday(day);
                    
                    return (
                      <button
                        key={day.toISOString()}
                        onClick={() => !isPast && hasSessions && setSelectedDate(day)}
                        disabled={isPast || !hasSessions}
                        className={`aspect-square flex flex-col items-center justify-center text-sm transition-all duration-300 relative
                          ${isSelected ? 'bg-clay text-bone' : ''}
                          ${isToday(day) && !isSelected ? 'border border-clay text-clay' : ''}
                          ${isPast ? 'text-muted-foreground/30 cursor-not-allowed' : ''}
                          ${!isPast && hasSessions && !isSelected ? 'hover:bg-muted/50 cursor-pointer' : ''}
                          ${!hasSessions && !isPast ? 'text-muted-foreground/50' : ''}
                        `}
                      >
                        <span>{format(day, 'd')}</span>
                        {hasSessions && !isPast && (
                          <div className={`w-1.5 h-1.5 rounded-full mt-1 ${isSelected ? 'bg-bone' : 'bg-clay'}`} />
                        )}
                      </button>
                    );
                  })}
                </div>
                
                {/* Legend */}
                <div className="mt-8 pt-6 border-t border-foreground/10 flex flex-wrap gap-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-clay" />
                    <span>Sessions Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-clay" />
                    <span>Today</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sessions List */}
            <div ref={sessionsRef} className={`transition-all duration-700 delay-200 ${calendarVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              {selectedDate ? (
                <>
                  <div className="flex items-center gap-4 mb-8">
                    <CalendarDays className="w-6 h-6 text-clay" />
                    <div>
                      <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block">
                        Available Sessions
                      </span>
                      <h3 className="font-serif text-2xl">
                        {format(selectedDate, 'EEEE, MMMM d')}
                      </h3>
                    </div>
                  </div>
                  
                  {selectedDateSessions.length > 0 ? (
                    <div className="space-y-4">
                      {selectedDateSessions.map((session, index) => (
                        <div
                          key={`${session.title}-${index}`}
                          className="group p-6 border border-foreground/10 hover:border-clay/30 transition-all duration-300 relative"
                        >
                          <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-clay/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-clay/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className={`w-2 h-2 rounded-full ${
                                  session.type === 'sound' ? 'bg-clay' : 
                                  session.type === 'breath' ? 'bg-earth' : 'bg-muted-foreground'
                                }`} />
                                <h4 className="font-serif text-xl group-hover:text-clay transition-colors duration-300">
                                  {session.title}
                                </h4>
                              </div>
                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5">
                                  <Clock className="w-4 h-4 text-clay" />
                                  {session.time}
                                </span>
                                <span>{session.duration}</span>
                                <span className="flex items-center gap-1.5">
                                  <Users className="w-4 h-4 text-clay" />
                                  {session.spots} spots
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="font-serif text-xl text-clay">{session.price}</span>
                              <a
                                href={`mailto:hello@omshala.com?subject=Booking: ${session.title} - ${format(selectedDate, 'MMM d, yyyy')}&body=I would like to book the ${session.title} session on ${format(selectedDate, 'EEEE, MMMM d, yyyy')} at ${session.time}.`}
                                className="group/btn px-4 py-2 border border-foreground/20 hover:border-clay hover:text-clay transition-all duration-300 flex items-center gap-2 text-sm"
                              >
                                Book
                                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16 border border-foreground/10">
                      <p className="text-muted-foreground mb-4">
                        No {activeFilter !== 'all' ? sessionTypes.find(t => t.id === activeFilter)?.label.toLowerCase() : ''} sessions available on this date.
                      </p>
                      <button
                        onClick={() => setActiveFilter('all')}
                        className="text-clay text-sm hover:underline"
                      >
                        Show all session types
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-center py-16 border border-foreground/10">
                  <div>
                    <CalendarDays className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Select a date to view available sessions
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Session Types Info */}
      <section className="py-28 md:py-40 bg-charcoal text-bone relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 -right-32 w-64 h-64 rounded-full border border-bone/5 animate-pulse-soft" />
        <div className="absolute bottom-20 -left-32 w-96 h-96 rounded-full border border-bone/5 animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-clay/10 rounded-full blur-[40px] animate-float" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-ash">Session Types</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-light">
              What to Expect
            </h2>
            <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-clay to-transparent mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Sound Healing",
                desc: "Immerse yourself in the healing frequencies of singing bowls, gongs, and other instruments. Sessions range from group sound baths to personalized one-on-one experiences.",
                duration: "60-90 min",
                size: "1-12 people"
              },
              {
                title: "Breathwork",
                desc: "Learn powerful breathing techniques to release tension, increase energy, and access expanded states of consciousness. Both gentle and dynamic practices available.",
                duration: "45-75 min",
                size: "1-8 people"
              },
              {
                title: "Meditation",
                desc: "Guided journeys into stillness suitable for all levels. Sessions may include visualization, body scanning, loving-kindness, and mindfulness practices.",
                duration: "30-60 min",
                size: "1-15 people"
              }
            ].map((type, index) => (
              <div key={type.title} className="p-8 border border-bone/10 hover:border-clay/30 transition-all duration-300 group">
                <h3 className="font-serif text-xl mb-4 group-hover:text-clay transition-colors duration-300">{type.title}</h3>
                <p className="text-bone/60 text-sm leading-relaxed mb-6">{type.desc}</p>
                <div className="flex gap-6 text-xs text-bone/50 pt-4 border-t border-bone/10">
                  <span>{type.duration}</span>
                  <span>{type.size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Booking CTA */}
      <section className="py-28 md:py-40 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-clay/10 rounded-full blur-[60px] animate-float" />
        
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Need Something More Personal?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            For private sessions, custom group experiences, or corporate wellness programs, 
            we offer flexible scheduling tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/events/private"
              className="group relative inline-flex items-center gap-2 px-10 py-4 bg-foreground text-background text-sm tracking-wide overflow-hidden transition-all duration-500 hover:shadow-2xl"
            >
              <span className="relative z-10 group-hover:text-background transition-colors duration-500">Explore Private Sessions</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
            <Link 
              to="/contact"
              className="px-10 py-4 border border-foreground/20 text-foreground hover:border-clay hover:text-clay transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </PageTransition>
  );
};

export default Schedule;