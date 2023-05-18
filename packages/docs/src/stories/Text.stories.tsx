import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptate necessitatibus fugiat, autem dolorem perspiciatis dolorum molestiae culpa exercitationem pariatur sed nesciunt consequuntur incidunt esse veniam itaque, excepturi placeat! Amet.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
