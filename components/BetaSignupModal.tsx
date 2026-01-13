import React from 'react';
import { useModal } from '@/context/ModalContext';
import { useBetaSignup, CameraOption, RoleOption, ExperienceOption } from '@/hooks/useBetaSignup';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const cameraOptions: CameraOption[] = ['Sony', 'Canon', 'Mobile Phone', 'Other'];
const roleOptions: RoleOption[] = [
  'Director',
  'Cinematographer/DoP',
  'Producer',
  'Screen Writer',
  'Camera Operator',
  'Content Creator',
  'Hobbyist',
  'Videographer',
  'Other'
];
const experienceOptions: ExperienceOption[] = ['Beginner', 'Intermediate', 'Professional'];

export const BetaSignupModal: React.FC = () => {
  const { isOpen, closeModal } = useModal();
  const { formData, updateField, submit, resetForm, state } = useBetaSignup();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit();
  };

  const handleClose = () => {
    resetForm();
    closeModal();
  };

  const isFormValid = formData.name && formData.email && formData.camera && formData.role && formData.experience;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="glass-card bg-shadow/95 border-white/10 text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-white">
            Join the Beta
          </DialogTitle>
          <DialogDescription className="text-alabaster/60">
            Get early access to FrameCoach and be part of the future of filmmaking.
          </DialogDescription>
        </DialogHeader>

        {state === 'success' ? (
          <div className="py-8 text-center">
            <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-500 animate-scale-in"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
            <p className="text-alabaster/60">
              We'll notify you when FrameCoach is ready for you.
            </p>
            <Button
              onClick={handleClose}
              className="mt-6 bg-scarlet hover:bg-scarlet-dark text-white"
            >
              Close
            </Button>
          </div>
        ) : state === 'duplicate_error' ? (
          <div className="py-8 text-center">
            <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-scarlet/20 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-scarlet"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">You're already signed up!</h3>
            <p className="text-alabaster/60">
              We have your email on file. Stay tuned for updates!
            </p>
            <Button
              onClick={handleClose}
              className="mt-6 bg-scarlet hover:bg-scarlet-dark text-white"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-alabaster">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                className="bg-shadow-light border-white/10 text-white placeholder:text-alabaster/40 focus:ring-scarlet focus:border-scarlet"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-alabaster">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="bg-shadow-light border-white/10 text-white placeholder:text-alabaster/40 focus:ring-scarlet focus:border-scarlet"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="camera" className="text-alabaster">
                Camera
              </Label>
              <Select value={formData.camera} onValueChange={(value) => updateField('camera', value)}>
                <SelectTrigger
                  id="camera"
                  className="bg-shadow-light border-white/10 text-white focus:ring-scarlet focus:border-scarlet"
                >
                  <SelectValue placeholder="Select your camera" />
                </SelectTrigger>
                <SelectContent className="bg-shadow-light border-white/10 text-white">
                  {cameraOptions.map((option) => (
                    <SelectItem key={option} value={option} className="text-white focus:bg-scarlet/20 focus:text-white">
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-alabaster">
                Role
              </Label>
              <Select value={formData.role} onValueChange={(value) => updateField('role', value)}>
                <SelectTrigger
                  id="role"
                  className="bg-shadow-light border-white/10 text-white focus:ring-scarlet focus:border-scarlet"
                >
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent className="bg-shadow-light border-white/10 text-white">
                  {roleOptions.map((option) => (
                    <SelectItem key={option} value={option} className="text-white focus:bg-scarlet/20 focus:text-white">
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience" className="text-alabaster">
                Experience Level
              </Label>
              <Select value={formData.experience} onValueChange={(value) => updateField('experience', value)}>
                <SelectTrigger
                  id="experience"
                  className="bg-shadow-light border-white/10 text-white focus:ring-scarlet focus:border-scarlet"
                >
                  <SelectValue placeholder="Select your experience" />
                </SelectTrigger>
                <SelectContent className="bg-shadow-light border-white/10 text-white">
                  {experienceOptions.map((option) => (
                    <SelectItem key={option} value={option} className="text-white focus:bg-scarlet/20 focus:text-white">
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {state === 'error' && (
              <div className="text-sm text-scarlet">
                Something went wrong. Please try again.
              </div>
            )}

            <Button
              type="submit"
              disabled={!isFormValid || state === 'loading'}
              className="w-full bg-scarlet hover:bg-scarlet-dark text-white font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(223,41,53,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state === 'loading' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Join Beta'
              )}
            </Button>

            <div className="text-center text-xs text-alabaster/40 pt-2">
              No spam. Unsubscribe anytime.
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
