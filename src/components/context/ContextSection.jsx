import Heading from './Heading'
import Section from './Section'

export default function ContextSection() {
  return (
    <Section>
      <Heading>大标题</Heading>
      <Section>
        <Heading>一级标题</Heading>
        <Heading>一级标题</Heading>
        <Section>
          <Heading>二级标题</Heading>
          <Heading>二级标题</Heading>
          <Heading>二级标题</Heading>
          <Section>
            <Heading>三级标题</Heading>
            <Heading>三级标题</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  )
}
