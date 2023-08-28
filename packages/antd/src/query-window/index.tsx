import React from 'react'
import { PreviewText } from '../preview-text'
import { connect, mapReadPretty } from '@formily/react'
import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'
interface IQueryWindowProps extends InputProps {
  onSearch: () => void
}
export const QueryWindow = connect((props: IQueryWindowProps) => {
  const { value, className, onSearch, ...others } = props
  return (
    <span className={className}>
      <Input.Search {...others} value={value} onSearch={onSearch} />
    </span>
  )
}, mapReadPretty(PreviewText.Input))
export default QueryWindow
