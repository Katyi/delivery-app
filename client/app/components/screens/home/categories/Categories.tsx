import { FC } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import Loader from '@/components/ui/Loader';
import Headings from '@/components/ui/Headings';

import { useTypedNavigation } from '@/hooks/useTypedNavigation';

import { getMediaSource } from '@/utils/getMediaSource';

import { useGetAllCategories } from './useGetAllCategories';

const Categories: FC = () => {
  const { categories, isLoading } = useGetAllCategories();

  const { navigate } = useTypedNavigation();

  return isLoading ? (
    <Loader />
  ) : (
    <View className="flex flex-col mt-5 mb-4">
      <Headings>Categories</Headings>

      <View className="flex-row justify-center mt-5">
        {categories?.map((category) => (
          <Pressable
            onPress={() => navigate('Category', { slug: category.slug })}
            key={category.id}
            className="rounded-xl bg-gray-100 p-5 mx-2"
          >
            <Image
              source={getMediaSource(category.image)}
              className="mb-2"
              width={40}
              height={32}
              style={{
                resizeMode: 'cover',
              }}
            />
            <Text className="font-normal text-xs text-center">
              {category.name}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Categories;
