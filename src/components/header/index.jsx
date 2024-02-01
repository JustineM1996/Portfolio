import { Dropdown } from "antd"
import { createStyles } from "antd-style"
import classNames from "classnames"

const useStyles = createStyles(({ token }) => {
  return {
    dropdown: {
      [`@media screen and (max-width: ${token.screenXS}px)`]: {
        width: "100%"
      }
    }
  }
})

export const HeaderDropdown = ({ overlayClassName: cls, ...restProps }) => {
  const { styles } = useStyles()
  return (
    <Dropdown
      overlayClassName={classNames(styles.dropdown, cls)}
      {...restProps}
    />
  )
}

