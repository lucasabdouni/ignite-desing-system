import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@lucasabdouni-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    size: 'md',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptate necessitatibus fugiat, autem dolorem perspiciatis dolorum molestiae culpa exercitationem pariatur sed nesciunt consequuntur incidunt esse veniam itaque, excepturi placeat! Amet.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
