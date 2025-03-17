import { CalendarDays, Clock, Users2, Globe2, CheckCircle2, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    country: '',
    specialty: '',
    hospital: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please agree to the terms and conditions to register");
      return;
    }
    console.log('Registration data:', formData);
    // Here you would typically send the data to your backend
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login with:', formData.email);
    // Here you would typically authenticate with your backend
  };

  const toggleFlip = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="min-h-screen w-full bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2880')] bg-cover bg-center bg-no-repeat">
      <div className="min-h-screen w-full bg-black/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-16 w-full">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-6">
            <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-200 border-blue-500/30 backdrop-blur-sm">
              CME Accredited Webinar
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Management of Complications<br />in ASCVD
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Join leading cardiovascular specialists for an in-depth exploration of the latest developments in ASCVD management
            </p>
          </div>

          {/* Speakers Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-200 border-blue-500/30 backdrop-blur-sm">
                World-Class Experts
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-4">Featured Speakers</h2>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                Learn from leading cardiovascular specialists with decades of combined experience
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Speaker 1 */}
              <Card className="p-6 bg-white/10 border-white/20 backdrop-blur-md text-white hover:bg-white/15 transition-all">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-32 w-32 border-4 border-blue-500/30 mb-4">
                    <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dr. Sarah Johnson" />
                    <AvatarFallback className="bg-blue-500/20 text-blue-200">SJ</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-white">Dr. Sarah Johnson</h3>
                  <p className="text-blue-300 mb-3">Director of Cardiovascular Research, Mayo Clinic</p>
                  <p className="text-blue-200 text-sm">Specializing in novel therapeutic approaches for complex ASCVD cases with over 15 years of clinical experience and 50+ published papers.</p>
                </div>
              </Card>

              {/* Speaker 2 */}
              <Card className="p-6 bg-white/10 border-white/20 backdrop-blur-md text-white hover:bg-white/15 transition-all">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-32 w-32 border-4 border-blue-500/30 mb-4">
                    <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dr. Michael Chen" />
                    <AvatarFallback className="bg-blue-500/20 text-blue-200">MC</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-white">Dr. Michael Chen</h3>
                  <p className="text-blue-300 mb-3">Chief of Cardiology, Johns Hopkins Hospital</p>
                  <p className="text-blue-200 text-sm">Leading expert in ASCVD risk assessment and management guidelines with extensive experience in treating comorbidities in cardiovascular patients.</p>
                </div>
              </Card>

              {/* Speaker 3 */}
              <Card className="p-6 bg-white/10 border-white/20 backdrop-blur-md text-white hover:bg-white/15 transition-all">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-32 w-32 border-4 border-blue-500/30 mb-4">
                    <AvatarImage src="https://randomuser.me/api/portraits/women/68.jpg" alt="Dr. Elena Rodriguez" />
                    <AvatarFallback className="bg-blue-500/20 text-blue-200">ER</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-white">Dr. Elena Rodriguez</h3>
                  <p className="text-blue-300 mb-3">Professor of Medicine, Stanford University</p>
                  <p className="text-blue-200 text-sm">Renowned researcher in cardiovascular complications management with a focus on personalized medicine approaches for diverse patient populations.</p>
                </div>
              </Card>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 w-full mb-16">
            {/* Event Details Card */}
            <Card className="p-8 bg-white/10 border-white/20 backdrop-blur-md text-white">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30">
                  <Users2 className="h-5 w-5" />
                  <span className="text-sm font-medium">Limited to 100 healthcare professionals</span>
                </div>

                <div className="grid gap-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 transition-all hover:bg-white/10">
                    <CalendarDays className="h-10 w-10 text-blue-400" />
                    <div>
                      <p className="font-medium text-lg text-white">September 15th, 2025</p>
                      <p className="text-blue-200">Monday, 2.0 CME credits available</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 transition-all hover:bg-white/10">
                    <Clock className="h-10 w-10 text-blue-400" />
                    <div>
                      <p className="font-medium text-lg text-white">2:00 PM - 4:00 PM (EST)</p>
                      <p className="text-blue-200">Interactive case discussions included</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 transition-all hover:bg-white/10">
                    <Globe2 className="h-10 w-10 text-blue-400" />
                    <div>
                      <p className="font-medium text-lg text-white">Live on ClickMeeting</p>
                      <p className="text-blue-200">Secure platform for medical discussions</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">Agenda</h3>
                  <div className="grid gap-4">
                    {[
                      "Current guidelines in ASCVD risk assessment and management",
                      "Novel therapeutic approaches in complex cases",
                      "Management of comorbidities and complications",
                      "Interactive case discussions and Q&A session",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <span className="text-blue-100">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Registration/Login Form Card */}
            <div className={`flip-container ${isFlipped ? 'flipped' : ''}`} style={{ perspective: '1000px' }}>
              <div className="flipper">
                {/* Registration Form (Front) */}
                <div className="front">
                  <Card className="p-8 bg-white backdrop-blur-xl">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <h2 className="text-3xl font-bold text-gray-900">Reserve Your Spot</h2>
                        <p className="text-gray-600 mt-2">Exclusive for healthcare professionals</p>
                      </div>
                      
                      <form className="flex flex-col flex-1 space-y-4" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900">First Name</label>
                            <Input 
                              placeholder="John" 
                              className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900">Last Name</label>
                            <Input 
                              placeholder="Doe" 
                              className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              value={formData.lastName}
                              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-900">Email Address</label>
                          <Input 
                            type="email" 
                            placeholder="your@hospital.org" 
                            className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-900">Country</label>
                          <Select 
                            value={formData.country}
                            onValueChange={(value) => setFormData({ ...formData, country: value })}
                          >
                            <SelectTrigger className="border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                              <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="us">United States</SelectItem>
                              <SelectItem value="ca">Canada</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="au">Australia</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-900">Hospital/Institution</label>
                          <Input 
                            placeholder="Your healthcare institution" 
                            className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            value={formData.hospital}
                            onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-900">Specialty</label>
                          <Select
                            value={formData.specialty}
                            onValueChange={(value) => setFormData({ ...formData, specialty: value })}
                          >
                            <SelectTrigger className="border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                              <SelectValue placeholder="Select your specialty" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cardiology">Cardiology</SelectItem>
                              <SelectItem value="internal">Internal Medicine</SelectItem>
                              <SelectItem value="family">Family Medicine</SelectItem>
                              <SelectItem value="emergency">Emergency Medicine</SelectItem>
                              <SelectItem value="endocrinology">Endocrinology</SelectItem>
                              <SelectItem value="other">Other Specialty</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-start gap-2">
                          <input
                            type="checkbox"
                            id="consent"
                            checked={formData.consent}
                            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                            className="mt-1"
                          />
                          <label htmlFor="consent" className="text-sm text-gray-600">
                            By registering, you agree to our terms of service and privacy policy.
                            This activity has been planned and implemented in accordance with accreditation requirements.
                          </label>
                        </div>

                        <div className="mt-auto pt-4">
                          <Button 
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-lg h-12 gap-2" 
                            size="lg"
                          >
                            Register Now
                            <ArrowRight className="h-5 w-5" />
                          </Button>

                          <div className="text-center mt-4">
                            <a
                              href="#"
                              onClick={toggleFlip}
                              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                            >
                              Already registered? Login here
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </Card>
                </div>

                {/* Login Form (Back) */}
                <div className="back">
                  <Card className="p-8 bg-white backdrop-blur-xl h-full">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
                        <p className="text-gray-600 mt-2">Login with your registered email</p>
                      </div>
                      
                      <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-900">Email Address</label>
                          <Input 
                            type="email" 
                            placeholder="your@hospital.org" 
                            className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>

                        <Button 
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-lg h-12 gap-2" 
                          size="lg"
                        >
                          Login
                          <ArrowRight className="h-5 w-5" />
                        </Button>

                        <div className="text-center mt-4">
                          <a
                            href="#"
                            onClick={toggleFlip}
                            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            Need to register?
                          </a>
                        </div>

                        <p className="text-sm text-gray-500 text-center">
                          By logging in, you agree to our terms of service and privacy policy.
                        </p>
                      </form>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;