import type { Meta, StoryObj } from '@storybook/react';
import FilterMoviesCard from "../components/filterMoviesCard";
import { FilterOption } from "../types/interfaces";


const meta = {
  title: 'Home Page/FilterMoviesCard',
  component: FilterMoviesCard,
} satisfies Meta<typeof FilterMoviesCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    titleFilter: "",
    genreFilter: "0",
    onUserInput: (filter: FilterOption, value: string) => {
      console.log(`Filter changed: ${filter} -> ${value}`);
    },
  },

};
Basic.storyName = "Default";

