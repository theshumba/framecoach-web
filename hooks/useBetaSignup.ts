import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export type CameraOption = 'Sony' | 'Canon' | 'Mobile Phone' | 'Other';
export type RoleOption = 'Director' | 'Cinematographer/DoP' | 'Producer' | 'Screen Writer' | 'Camera Operator' | 'Content Creator' | 'Hobbyist' | 'Videographer' | 'Other';
export type ExperienceOption = 'Beginner' | 'Intermediate' | 'Professional';
export type SubmissionState = 'idle' | 'loading' | 'success' | 'duplicate_error' | 'error';

interface FormData {
  name: string;
  email: string;
  camera: CameraOption | '';
  role: RoleOption | '';
  experience: ExperienceOption | '';
}

export const useBetaSignup = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    camera: '',
    role: '',
    experience: ''
  });

  const [state, setState] = useState<SubmissionState>('idle');

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      camera: '',
      role: '',
      experience: ''
    });
    setState('idle');
  };

  const submit = async () => {
    if (!formData.name || !formData.email || !formData.camera || !formData.role || !formData.experience) {
      return;
    }

    if (!supabase) {
      console.error('Supabase not configured');
      setState('error');
      return;
    }

    setState('loading');

    try {
      const { error } = await supabase
        .from('beta_signups')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            camera: formData.camera,
            role: formData.role,
            experience: formData.experience
          }
        ]);

      if (error) {
        // Check if it's a unique constraint violation (duplicate email)
        if (error.code === '23505') {
          setState('duplicate_error');
        } else {
          console.error('Supabase error:', error);
          setState('error');
        }
      } else {
        setState('success');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setState('error');
    }
  };

  return {
    formData,
    updateField,
    submit,
    resetForm,
    state
  };
};
