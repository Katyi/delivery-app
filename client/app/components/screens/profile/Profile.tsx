import { useAuth } from '@/hooks/useAuth';
import { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { useProfile } from './useProfile';
import Headings from '@/components/ui/Headings';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/button/Button';
import { AuthService } from '@/services/auth/auth.service';

const Profile: FC = () => {
  const { setUser } = useAuth();

  const { profile } = useProfile();

  return (
    <Layout>
      <Headings isCenter>Profile</Headings>

      <View className="my-6 items-center justify-center">
        <Image
          source={{ uri: profile?.avatarPath }}
          className="w-40 h-40 rounded-full"
        />
      </View>

      <Button
        onPress={() => AuthService.logout().then(() => setUser(null))}
        className="mt-5"
      >
        Logout
      </Button>
    </Layout>
  );
};

export default Profile;
