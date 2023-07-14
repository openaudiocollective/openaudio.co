import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Open Audio Collective"
          description="Open Audio Collective: Audio Networking for Everyone"
        />
      }
    >
      <Link href="https://github.com/openaudiocollective">
        <Image
          alt="OpenAudioCollective Logo with the slogan: Audio Networking for Everyone. Click the Logo to see the Github Organization page."
          src={`${router.basePath}/logo.svg`}
          height={429}
          width={315}
          objectFit="contain"
          className="h-auto w-full"
        />
      </Link>
    </Main>
  );
};

export default Index;
