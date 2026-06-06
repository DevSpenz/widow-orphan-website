'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Heart, 
  Users, 
  GraduationCap, 
  Home as HomeIcon, 
  HandHeart, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  Shield,
  BookOpen,
  Briefcase,
  Stethoscope,
  Utensils,
  Baby,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#programs', label: 'Programs' },
    { href: '#impact', label: 'Impact Stories' },
    { href: '#donate', label: 'Donate' },
    { href: '#contact', label: 'Contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <HandHeart className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className={`font-bold text-lg md:text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              <span className="text-emerald-600">Tumaini</span> Foundation
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-colors hover:text-emerald-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('#donate')}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-full px-6"
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('#donate')}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-full"
              >
                Donate Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Kenyan community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-teal-800/70 to-emerald-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 bg-emerald-500/20 text-emerald-100 border-emerald-400/30 px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Empowering Lives, Building Futures
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Bringing Hope to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
              Widows & Orphans
            </span>
            in Kenya
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Tumaini Foundation is dedicated to empowering widows and orphaned children across Kenya 
            through education, skills training, healthcare support, and community development programs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => document.querySelector('#donate')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-emerald-500/25"
            >
              <Heart className="w-5 h-5 mr-2" />
              Make a Donation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
            >
              Our Programs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { number: '5,000+', label: 'Widows Empowered' },
            { number: '3,200+', label: 'Children Supported' },
            { number: '47', label: 'Counties Reached' },
            { number: '15+', label: 'Years of Service' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm md:text-base text-white/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white/70 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-emerald-100 text-emerald-700">About Us</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story of <span className="text-emerald-600">Hope</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded in 2009, Tumaini Foundation began as a small community initiative in Nairobi 
            to support widows who had lost their husbands to HIV/AIDS. Today, we have grown into 
            a nationally recognized organization touching thousands of lives across all 47 counties of Kenya.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 text-lg leading-relaxed">
                  A Kenya where every widow and orphaned child has access to education, 
                  healthcare, economic opportunities, and a supportive community that enables 
                  them to live with dignity and realize their full potential.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower widows and orphaned children in Kenya through sustainable programs 
                  that provide education, vocational training, healthcare, psychosocial support, 
                  and community integration to break the cycle of poverty.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Our Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: 'Compassion', desc: 'We treat everyone with dignity and empathy' },
              { icon: Shield, title: 'Integrity', desc: 'We maintain transparency in all operations' },
              { icon: Users, title: 'Community', desc: 'We believe in collective strength and support' },
              { icon: Sparkles, title: 'Excellence', desc: 'We strive for impactful, lasting change' },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Programs Section
function ProgramsSection() {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Education Support',
      description: 'Providing scholarships, school supplies, and educational materials to orphaned children. Our program covers primary, secondary, and vocational education to ensure every child has access to quality learning opportunities.',
      impact: 'Over 2,500 children currently enrolled in schools across Kenya',
      color: 'from-blue-500 to-indigo-600',
      image: '/images/orphan-support.png',
    },
    {
      icon: Briefcase,
      title: 'Widow Empowerment',
      description: 'Vocational training and skills development programs including tailoring, beadwork, agriculture, and small business management. We provide startup capital and mentorship to help widows achieve financial independence.',
      impact: '3,000+ widows trained and 80% now self-employed',
      color: 'from-purple-500 to-pink-600',
      image: '/images/widow-empowerment.png',
    },
    {
      icon: Stethoscope,
      title: 'Healthcare Access',
      description: 'Medical camps, health insurance enrollment, and support for chronic illness treatment. We ensure widows and children have access to essential healthcare services including maternal and child health programs.',
      impact: '150+ medical camps conducted serving 25,000+ people',
      color: 'from-rose-500 to-red-600',
      image: '/images/community.png',
    },
    {
      icon: HomeIcon,
      title: 'Shelter & Housing',
      description: 'Building and renovating homes for vulnerable families. Our housing program ensures that widows and children have safe, secure, and dignified living conditions with access to clean water and sanitation.',
      impact: '450+ homes built or renovated across Kenya',
      color: 'from-amber-500 to-orange-600',
      image: '/images/community.png',
    },
    {
      icon: Utensils,
      title: 'Food Security',
      description: 'Nutrition programs, kitchen gardens, and food distribution initiatives. We support families to grow their own food through agricultural training and provide emergency food relief during crises.',
      impact: '1.2M+ meals served through feeding programs',
      color: 'from-green-500 to-emerald-600',
      image: '/images/community.png',
    },
    {
      icon: Baby,
      title: 'Psychosocial Support',
      description: 'Counseling services, support groups, and trauma healing programs. We help widows and children cope with loss, grief, and stigma through professional counseling and peer support networks.',
      impact: '500+ counseling sessions conducted monthly',
      color: 'from-teal-500 to-cyan-600',
      image: '/images/community.png',
    },
  ]

  return (
    <section id="programs" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-emerald-100 text-emerald-700">Our Programs</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-emerald-600">Support Programs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our holistic approach addresses the multifaceted needs of widows and orphaned children, 
            providing them with the tools and resources they need to thrive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className={`h-48 bg-gradient-to-br ${program.color} relative overflow-hidden`}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-emerald-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-medium text-emerald-800">{program.impact}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Impact Stories Section
function ImpactSection() {
  const stories = [
    {
      name: 'Mary Wanjiku',
      role: 'Widow, Entrepreneur',
      location: 'Nakuru County',
      image: '/images/widow-empowerment.png',
      story: 'After losing my husband in 2018, I struggled to feed my three children. Tumaini Foundation enrolled me in their tailoring program and gave me a sewing machine. Today, I run a successful tailoring business, employ two other widows, and all my children are in school.',
      quote: 'Tumaini gave me more than skills—they gave me hope and a future.',
    },
    {
      name: 'Brian Ochieng',
      role: 'University Student',
      location: 'Kisumu County',
      image: '/images/orphan-support.png',
      story: 'I lost both parents when I was 10. Tumaini Foundation supported my education from primary school through high school. Now I am studying medicine at the University of Nairobi, the first in my family to attend university.',
      quote: 'They believed in me when I had no one. I want to become a doctor to help others.',
    },
    {
      name: 'Grace Muthoni',
      role: 'Farmer, Community Leader',
      location: 'Murang\'a County',
      image: '/images/community.png',
      story: 'The agricultural training program transformed my life. I learned modern farming techniques and received seeds and tools. My farm now produces enough vegetables to feed my family and sell at the market. I also train other widows in my community.',
      quote: 'I am no longer just surviving—I am thriving and helping others do the same.',
    },
  ]

  return (
    <section id="impact" className="py-20 md:py-28 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-emerald-100 text-emerald-700">Impact Stories</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Lives <span className="text-emerald-600">Transformed</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every donation creates ripples of change. Meet some of the incredible individuals 
            whose lives have been transformed through our programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-xl font-bold text-white">{story.name}</h4>
                    <p className="text-white/80 text-sm">{story.role}</p>
                    <p className="text-white/60 text-xs">{story.location}</p>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{story.story}</p>
                  <blockquote className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50 rounded-r-lg">
                    <p className="text-emerald-800 italic text-sm font-medium">&ldquo;{story.quote}&rdquo;</p>
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: 'KES 250M+', label: 'Funds Raised' },
              { number: '8,200+', label: 'Families Supported' },
              { number: '95%', label: 'Funds to Programs' },
              { number: '500+', label: 'Active Volunteers' },
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{metric.number}</div>
                <div className="text-sm md:text-base text-white/70">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Donation Section
function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState<string>('')
  const [customAmount, setCustomAmount] = useState<string>('')
  const [donationType, setDonationType] = useState<string>('one-time')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const predefinedAmounts = [
    { value: '500', label: 'KES 500', desc: 'School supplies for 1 child' },
    { value: '1000', label: 'KES 1,000', desc: 'Monthly food support for a family' },
    { value: '2500', label: 'KES 2,500', desc: 'Health insurance for 1 person' },
    { value: '5000', label: 'KES 5,000', desc: 'Vocational training materials' },
    { value: '10000', label: 'KES 10,000', desc: 'School fees for 1 term' },
    { value: '25000', label: 'KES 25,000', desc: 'Start-up capital for a widow' },
  ]

  const fundraisingGoal = 15000000
  const currentRaised = 10250000
  const progressPercentage = (currentRaised / fundraisingGoal) * 100

  const handleDonate = () => {
    // In a real application, this would integrate with a payment gateway
    alert(`Thank you for your generous donation of KES ${selectedAmount || customAmount}! In a production environment, this would redirect to a payment gateway like M-Pesa or card payment.`)
    setIsDialogOpen(false)
  }

  return (
    <section id="donate" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-emerald-100 text-emerald-700">Support Our Cause</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Make a <span className="text-emerald-600">Difference</span> Today
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your contribution, no matter the size, helps us provide education, healthcare, 
            and economic opportunities to widows and orphaned children across Kenya.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Choose Your Gift</CardTitle>
                <CardDescription className="text-white/80">
                  Select an amount or enter a custom donation
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {/* Donation Type */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Donation Type</Label>
                  <Tabs value={donationType} onValueChange={setDonationType}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="one-time">One-Time</TabsTrigger>
                      <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Predefined Amounts */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Select Amount</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount.value}
                        onClick={() => {
                          setSelectedAmount(amount.value)
                          setCustomAmount('')
                        }}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          selectedAmount === amount.value
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        <div className="font-bold text-gray-900">{amount.label}</div>
                        <div className="text-xs text-gray-500">{amount.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-2 block">Or Enter Custom Amount</Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">KES</span>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value)
                        setSelectedAmount('')
                      }}
                      className="pl-16 h-12"
                    />
                  </div>
                </div>

                {/* Donate Button */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full h-14 text-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-xl"
                      disabled={!selectedAmount && !customAmount}
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      Donate {selectedAmount ? `KES ${parseInt(selectedAmount).toLocaleString()}` : customAmount ? `KES ${parseInt(customAmount).toLocaleString()}` : ''} {donationType === 'monthly' ? 'Monthly' : 'Now'}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Complete Your Donation</DialogTitle>
                      <DialogDescription>
                        Please provide your details to proceed with the donation
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={donorInfo.name}
                          onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={donorInfo.email}
                          onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (M-Pesa)</Label>
                        <Input
                          id="phone"
                          value={donorInfo.phone}
                          onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                          placeholder="07XX XXX XXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message (Optional)</Label>
                        <Textarea
                          id="message"
                          value={donorInfo.message}
                          onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                          placeholder="Share why you're donating..."
                          rows={3}
                        />
                      </div>
                      <Button 
                        onClick={handleDonate}
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                      >
                        Proceed to Payment
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Payment Methods */}
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-500 text-center mb-3">Secure payment via</p>
                  <div className="flex justify-center items-center gap-4">
                    <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">M-Pesa</div>
                    <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">Card</div>
                    <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">Bank</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Fundraising Progress */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">2024 Fundraising Goal</CardTitle>
                <CardDescription>Help us reach our target to expand our programs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700">Progress</span>
                    <span className="font-bold text-emerald-600">{progressPercentage.toFixed(1)}%</span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-emerald-50 rounded-xl">
                    <div className="text-2xl font-bold text-emerald-700">KES {(currentRaised / 1000000).toFixed(1)}M</div>
                    <div className="text-sm text-gray-600">Raised so far</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-700">KES {(fundraisingGoal / 1000000).toFixed(0)}M</div>
                    <div className="text-sm text-gray-600">Our goal</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Ways to Help */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Other Ways to Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Volunteer</h4>
                    <p className="text-sm text-gray-600">Share your time and skills to support our programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sponsor a Child</h4>
                    <p className="text-sm text-gray-600">Provide ongoing support for a child&apos;s education</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Corporate Partnership</h4>
                    <p className="text-sm text-gray-600">Partner with us for CSR initiatives</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setContactForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-emerald-100 text-emerald-700">Get in Touch</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-emerald-600">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our programs or want to get involved? 
            We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Office</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">Tumaini House, 2nd Floor<br />Ngong Road, Nairobi<br />Kenya, P.O. Box 12345 - 00100</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+254 700 123 456<br />+254 720 987 654</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@tumainifoundation.or.ke<br />donations@tumainifoundation.or.ke</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: Linkedin, href: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Working Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-400">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we will get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h4>
                    <p className="text-gray-600">Your message has been sent successfully. We will get back to you soon.</p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Full Name</Label>
                        <Input
                          id="contact-name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email Address</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-subject">Subject</Label>
                      <Select onValueChange={(value) => setContactForm({ ...contactForm, subject: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="donation">Donation Inquiry</SelectItem>
                          <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                          <SelectItem value="partnership">Corporate Partnership</SelectItem>
                          <SelectItem value="programs">Program Information</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message</Label>
                      <Textarea
                        id="contact-message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="How can we help you?"
                        rows={5}
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <HandHeart className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">
                <span className="text-emerald-400">Tumaini</span> Foundation
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering widows and orphaned children in Kenya through education, 
              healthcare, economic opportunities, and community support since 2009.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Programs', 'Impact Stories', 'Donate', 'Volunteer', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Ngong Road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-500" />
                <span>info@tumainifoundation.or.ke</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Tumaini Foundation. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <DonationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
