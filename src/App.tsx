import { CalendarDays, Clock, Users2, Globe2, CheckCircle2, ArrowRight } from 'lucide-react';
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

function App() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2880')] bg-cover bg-center bg-no-repeat">
      <div className="min-h-screen bg-black/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-16">
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

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Event Details Card */}
            <Card className="p-8 bg-white/10 border-white/20 backdrop-blur-md text-white h-full flex flex-col">
              <div className="space-y-6 flex flex-col flex-1">
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

            {/* Registration Form Card */}
            <Card className="p-8 bg-white backdrop-blur-xl h-full">
              <div className="space-y-6 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Reserve Your Spot</h2>
                  <p className="text-gray-600 mt-2">Exclusive for healthcare professionals</p>
                </div>
                
                <form className="space-y-5 flex-1 flex flex-col">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900">First Name</label>
                      <Input 
                        placeholder="John" 
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900">Last Name</label>
                      <Input 
                        placeholder="Doe" 
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Country</label>
                    <Select>
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
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Specialty</label>
                    <Select>
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

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Professional Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@hospital.org" 
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg h-12 gap-2 mt-auto" 
                    size="lg"
                  >
                    Register Now
                    <ArrowRight className="h-5 w-5" />
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By registering, you agree to our terms of service and privacy policy.
                    This activity has been planned and implemented in accordance with accreditation requirements.
                  </p>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;