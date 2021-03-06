import { Component, Prop, h } from '@stencil/core';

import { format } from '../../utils/utils';
import { libA } from '@my-workspace/lib-a';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        {libA} I'm {this.getText()}
      </div>
    );
  }
}
