// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TrademarkCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleTwoTone';

export default {
  name: 'IconTrademarkCircleTwoTone',
  displayName: 'TrademarkCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TrademarkCircleTwoToneSvg } },
      children,
    ),
};