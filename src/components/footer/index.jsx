import { DefaultFooter } from "@ant-design/pro-components"

export const Footer = () => {
  return (
    <DefaultFooter
      style={{
        background: "none"
      }}
      links={[
        {
          key: "ant design pro",
          title: "Power by Ant Design Pro",
          href: "https://pro.ant.design",
          blankTarget: true
        }
      ]}
    />
  )
}
