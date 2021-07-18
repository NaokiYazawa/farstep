import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  UserIcon,
} from '@heroicons/react/outline'

import HeaderItem from '../components/HeaderItem'

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div>
        <a href="#" className="flex items-center py-5 px-5 text-gray-700 hover:text-gray-900">
          <span className="text-lg font-bold">FarStep</span>
        </a>
      </div>
    </header>
  )
}

export default Header
