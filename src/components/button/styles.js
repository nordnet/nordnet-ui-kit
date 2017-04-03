const styles = {
  button: {
    display: 'inline-block',
    color: p => p.theme.palette.color.blue,
    'background-color': p => p.theme.palette.color.white,
  },
  block: {
    display: 'block',
  },
};

export default styles;

/*
@import '../../variables';
@import '../../functions';

$sizes: (
  xs: 12px,
  sm: 14px,
  md: 16px,
  lg: 18px,
);

$sizePaddings: (
  xs: 4px,
  sm: 7px,
  md: 10px,
  lg: 13px,
);

@mixin btn--modifier ($variant, $modifier, $color, $color-focus) {
  &--#{ $modifier } {
    outline-color: $color;

    @if $variant == 'primary' {
      background: $color;
      border-color: $color;

      &:hover {
        background: $color-focus;
        border-color: $color-focus;
      }
    }

    @if $variant == 'secondary' {
      color: $color;
      border-color: $color;

      &:hover {
        color: $color-focus;
        border-color: $color-focus;
      }
    }

    @if $variant == 'link' {
      color: $color;

      &:hover {
        color: $color-focus;
      }
    }
  }
}

.btn {
  &-primary,
  &-secondary,
  &-link {
    display: inline-block;
    border: 0;
    font-family: inherit;
    font-weight: 700;
    line-height: 1;
    transition: all .1s $ease-out;
    text-decoration: none;
    user-select: none;
    text-align: center;

    &:disabled {
      cursor: not-allowed;
    }
    &:hover {
      cursor: pointer;
    }
  }

  &--block {
    display: block;
    width: 100%;
  }

  @each $size, $font-size in $sizes {
    &--#{$size} {
      font-size: rem($font-size);
      padding: rem(map-get($sizePaddings, #{$size}));
    }
  }

  &-primary {
    background: $color-primary;
    // border: rem(2px solid $color-primary);
    border: rem(2px solid $color-primary);
    color: #fff;

    &--warning {
      color: $color-black;
    }

    &:hover {
      background: $color-primary--focus;
      border-color: $color-primary--focus;
    }

    &:disabled {
      background: $color-background-disabled;
      border: rem(2px solid $color-background-disabled);
      color: $color-disabled;

      &:hover {
        background: $color-background-disabled;
        border-color: $color-background-disabled;
      }
    }

    @include btn--modifier('primary', 'success', $color-success, $color-success--focus);
    @include btn--modifier('primary', 'warning', $color-warning, $color-warning--focus);
    @include btn--modifier('primary', 'danger', $color-danger, $color-danger--focus);
  }

  &-secondary {
    background: none;
    color: $color-primary;
    border: rem(2px solid $color-primary);

    &:hover {
      color: $color-primary--focus;
      border-color: $color-primary--focus;
    }

    &:disabled {
      border: rem(2px solid $color-background-disabled);
      color: $color-background-disabled;

      &:hover {
        color: $color-background-disabled;
        border-color: $color-background-disabled;
      }
    }

    @include btn--modifier('secondary', 'success', $color-success, $color-success--focus);
    @include btn--modifier('secondary', 'warning', $color-warning, $color-warning--focus);
    @include btn--modifier('secondary', 'danger', $color-danger, $color-danger--focus);
  }

  &-link {
    background: none;
    padding-left: 0;
    padding-right: 0;
    color: $color-primary;
    border: rem(2px solid transparent);
    font-weight: 600;
    cursor: pointer;

    &:hover {
      color: $color-primary-dark;
    }

    &:disabled {
      color: $color-background-disabled;

      &:hover {
        color: $color-background-disabled;
      }
    }

    @include btn--modifier('link', 'success', $color-success, $color-success--focus);
    @include btn--modifier('link', 'warning', $color-warning, $color-warning--focus);
    @include btn--modifier('link', 'danger', $color-danger, $color-danger--focus);
  }
}
*/
