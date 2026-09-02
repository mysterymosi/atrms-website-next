import Image from 'next/image'

import atlasLogo from '@/images/logos/atlas-logo.png'

export function Logo(
  props: Omit<React.ComponentPropsWithoutRef<typeof Image>, 'src' | 'alt'>,
) {
  return <Image src={atlasLogo} alt="Atlas" {...props} />
}
