import { ReactComponent as IconAccountsAndPayments } from '../assets/icons/cat_accounts-and-payments.svg'
import { ReactComponent as IconClothes } from '../assets/icons/cat_clothes.svg'
import { ReactComponent as IconFood } from '../assets/icons/cat_food.svg'
import { ReactComponent as IconFun } from '../assets/icons/cat_fun.svg'
import { ReactComponent as IconHealthAndHygiene } from '../assets/icons/cat_health-and-hygiene.svg'
import { ReactComponent as IconHome } from '../assets/icons/cat_home.svg'
import { ReactComponent as IconShopping } from '../assets/icons/cat_shopping.svg'
import { ReactComponent as IconTransport } from '../assets/icons/cat_transport.svg'

const CATEGORY_ICONS = {
  'accounts-and-payments': IconAccountsAndPayments,
  'clothes':               IconClothes,
  'food':                  IconFood,
  'fun':                   IconFun,
  'health-and-hygiene':    IconHealthAndHygiene,
  'home':                  IconHome,
  'shopping':              IconShopping,
  'transport':             IconTransport,
}

export default function CategoryIcons({ id }) {
  const IconComponent = CATEGORY_ICONS[id]

  return (
    <>
      {IconComponent && <IconComponent />}
    </>
  )
}
