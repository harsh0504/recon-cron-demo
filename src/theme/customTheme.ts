import { FOUNDATION_THEME } from '@juspay/blend-design-system';
import type { TextInputComponentTokens } from '@juspay/blend-design-system/components/TextInput/textInput.tokens';
import type { TextAreaComponentTokens } from '@juspay/blend-design-system/components/TextArea/textArea.tokens';
import type { SelectComponentTokens } from '@juspay/blend-design-system/components/Select/select.tokens';
import type { SwitchComponentTokens } from '@juspay/blend-design-system/components/Switch/switch.tokens';
import type { RadioComponentTokens } from '@juspay/blend-design-system/components/Radio/radio.tokens';
import type { CheckboxComponentTokens } from '@juspay/blend-design-system/components/Checkbox/checkbox.tokens';

// ============================================================================
// FOUNDATION TOKENS
// ============================================================================
// Using Blend's default foundation theme as base
export const CUSTOM_FOUNDATION_TOKENS = {
  ...FOUNDATION_THEME,
};

// ============================================================================
// TEXT INPUT COMPONENT TOKENS
// ============================================================================
const TEXT_INPUT_TOKENS: TextInputComponentTokens = {
  sm: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[500],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    hintText: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    helpIcon: {
      width: '16px',
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    errorMessage: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    required: {
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    inputContainer: {
      fontSize: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        md: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        lg: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      },
      fontWeight: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        md: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        lg: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      },
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
      borderRadius: {
        sm: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        md: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        lg: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
      },
      boxShadow: 'none',
      padding: {
        x: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[12],
          md: CUSTOM_FOUNDATION_TOKENS.unit[12],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
        y: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[8],
          md: CUSTOM_FOUNDATION_TOKENS.unit[10],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
      },
      border: {
        default: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
        hover: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[400]}`,
        focus: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.primary[500]}`,
        error: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.red[500]}`,
        disabled: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[200]}`,
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        hover: CUSTOM_FOUNDATION_TOKENS.colors.white,
        focus: CUSTOM_FOUNDATION_TOKENS.colors.white,
        error: CUSTOM_FOUNDATION_TOKENS.colors.white,
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
      },
    },
  },
  md: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[500],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    hintText: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    helpIcon: {
      width: '16px',
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    errorMessage: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    required: {
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    inputContainer: {
      fontSize: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        md: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        lg: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      },
      fontWeight: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        md: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        lg: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      },
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
      borderRadius: {
        sm: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        md: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        lg: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
      },
      boxShadow: 'none',
      padding: {
        x: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[12],
          md: CUSTOM_FOUNDATION_TOKENS.unit[12],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
        y: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[8],
          md: CUSTOM_FOUNDATION_TOKENS.unit[10],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
      },
      border: {
        default: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
        hover: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[400]}`,
        focus: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.primary[500]}`,
        error: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.red[500]}`,
        disabled: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[200]}`,
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        hover: CUSTOM_FOUNDATION_TOKENS.colors.white,
        focus: CUSTOM_FOUNDATION_TOKENS.colors.white,
        error: CUSTOM_FOUNDATION_TOKENS.colors.white,
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
      },
    },
  },
  lg: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[500],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    hintText: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    helpIcon: {
      width: '16px',
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    errorMessage: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    required: {
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    inputContainer: {
      fontSize: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        md: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        lg: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      },
      fontWeight: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        md: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        lg: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      },
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
      borderRadius: {
        sm: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        md: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        lg: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
      },
      boxShadow: 'none',
      padding: {
        x: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[12],
          md: CUSTOM_FOUNDATION_TOKENS.unit[12],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
        y: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[8],
          md: CUSTOM_FOUNDATION_TOKENS.unit[10],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
      },
      border: {
        default: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
        hover: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[400]}`,
        focus: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.primary[500]}`,
        error: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.red[500]}`,
        disabled: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[200]}`,
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        hover: CUSTOM_FOUNDATION_TOKENS.colors.white,
        focus: CUSTOM_FOUNDATION_TOKENS.colors.white,
        error: CUSTOM_FOUNDATION_TOKENS.colors.white,
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
      },
    },
  },
};

// ============================================================================
// TEXT AREA COMPONENT TOKENS
// ============================================================================
const TEXT_AREA_TOKENS: TextAreaComponentTokens = {
  sm: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[500],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    hintText: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    helpIcon: {
      width: '16px',
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    errorMessage: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    required: {
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    textAreaContainer: {
      fontSize: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        md: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        lg: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      },
      fontWeight: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        md: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        lg: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      },
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
      borderRadius: {
        sm: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        md: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        lg: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
      },
      boxShadow: 'none',
      padding: {
        x: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[12],
          md: CUSTOM_FOUNDATION_TOKENS.unit[12],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
        y: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[8],
          md: CUSTOM_FOUNDATION_TOKENS.unit[10],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
      },
      border: {
        default: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
        hover: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[400]}`,
        focus: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.primary[500]}`,
        error: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.red[500]}`,
        disabled: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[200]}`,
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        hover: CUSTOM_FOUNDATION_TOKENS.colors.white,
        focus: CUSTOM_FOUNDATION_TOKENS.colors.white,
        error: CUSTOM_FOUNDATION_TOKENS.colors.white,
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
      },
    },
  },
  md: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[500],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    hintText: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    helpIcon: {
      width: '16px',
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    errorMessage: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    required: {
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    textAreaContainer: {
      fontSize: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        md: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        lg: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      },
      fontWeight: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        md: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        lg: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      },
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
      borderRadius: {
        sm: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        md: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        lg: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
      },
      boxShadow: 'none',
      padding: {
        x: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[12],
          md: CUSTOM_FOUNDATION_TOKENS.unit[12],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
        y: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[8],
          md: CUSTOM_FOUNDATION_TOKENS.unit[10],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
      },
      border: {
        default: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
        hover: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[400]}`,
        focus: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.primary[500]}`,
        error: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.red[500]}`,
        disabled: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[200]}`,
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        hover: CUSTOM_FOUNDATION_TOKENS.colors.white,
        focus: CUSTOM_FOUNDATION_TOKENS.colors.white,
        error: CUSTOM_FOUNDATION_TOKENS.colors.white,
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
      },
    },
  },
  lg: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[500],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    hintText: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    helpIcon: {
      width: '16px',
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    errorMessage: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    required: {
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    textAreaContainer: {
      fontSize: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        md: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        lg: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      },
      fontWeight: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        md: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        lg: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      },
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
      borderRadius: {
        sm: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        md: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        lg: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
      },
      boxShadow: 'none',
      padding: {
        x: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[12],
          md: CUSTOM_FOUNDATION_TOKENS.unit[12],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
        y: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[8],
          md: CUSTOM_FOUNDATION_TOKENS.unit[10],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
      },
      border: {
        default: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
        hover: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[400]}`,
        focus: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.primary[500]}`,
        error: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.red[500]}`,
        disabled: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[200]}`,
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        hover: CUSTOM_FOUNDATION_TOKENS.colors.white,
        focus: CUSTOM_FOUNDATION_TOKENS.colors.white,
        error: CUSTOM_FOUNDATION_TOKENS.colors.white,
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
      },
    },
  },
};

// ============================================================================
// SELECT (Single/Multi Select) COMPONENT TOKENS
// ============================================================================
const SELECT_TOKENS: SelectComponentTokens = {
  sm: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[500],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    hintText: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    helpIcon: {
      width: '16px',
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    errorMessage: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    required: {
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    selectContainer: {
      fontSize: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        md: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        lg: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      },
      fontWeight: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        md: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        lg: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      },
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
      borderRadius: {
        sm: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        md: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        lg: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
      },
      boxShadow: 'none',
      padding: {
        x: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[12],
          md: CUSTOM_FOUNDATION_TOKENS.unit[12],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
        y: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[8],
          md: CUSTOM_FOUNDATION_TOKENS.unit[10],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
      },
      border: {
        default: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
        hover: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[400]}`,
        focus: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.primary[500]}`,
        error: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.red[500]}`,
        disabled: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[200]}`,
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        hover: CUSTOM_FOUNDATION_TOKENS.colors.white,
        focus: CUSTOM_FOUNDATION_TOKENS.colors.white,
        error: CUSTOM_FOUNDATION_TOKENS.colors.white,
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
      },
    },
    menuContainer: {
      backgroundColor: CUSTOM_FOUNDATION_TOKENS.colors.white,
      borderRadius: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
      border: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      maxHeight: '300px',
    },
    menuItem: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      padding: {
        x: CUSTOM_FOUNDATION_TOKENS.unit[12],
        y: CUSTOM_FOUNDATION_TOKENS.unit[8],
      },
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        selected: CUSTOM_FOUNDATION_TOKENS.colors.primary[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
        selected: CUSTOM_FOUNDATION_TOKENS.colors.primary[50],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.white,
      },
    },
  },
  md: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[500],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    hintText: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    helpIcon: {
      width: '16px',
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    errorMessage: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    required: {
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    selectContainer: {
      fontSize: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        md: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        lg: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      },
      fontWeight: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        md: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        lg: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      },
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
      borderRadius: {
        sm: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        md: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        lg: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
      },
      boxShadow: 'none',
      padding: {
        x: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[12],
          md: CUSTOM_FOUNDATION_TOKENS.unit[12],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
        y: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[8],
          md: CUSTOM_FOUNDATION_TOKENS.unit[10],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
      },
      border: {
        default: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
        hover: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[400]}`,
        focus: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.primary[500]}`,
        error: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.red[500]}`,
        disabled: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[200]}`,
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        hover: CUSTOM_FOUNDATION_TOKENS.colors.white,
        focus: CUSTOM_FOUNDATION_TOKENS.colors.white,
        error: CUSTOM_FOUNDATION_TOKENS.colors.white,
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
      },
    },
    menuContainer: {
      backgroundColor: CUSTOM_FOUNDATION_TOKENS.colors.white,
      borderRadius: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
      border: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      maxHeight: '300px',
    },
    menuItem: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      padding: {
        x: CUSTOM_FOUNDATION_TOKENS.unit[12],
        y: CUSTOM_FOUNDATION_TOKENS.unit[8],
      },
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        selected: CUSTOM_FOUNDATION_TOKENS.colors.primary[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
        selected: CUSTOM_FOUNDATION_TOKENS.colors.primary[50],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.white,
      },
    },
  },
  lg: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[500],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    hintText: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    helpIcon: {
      width: '16px',
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    errorMessage: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    required: {
      color: CUSTOM_FOUNDATION_TOKENS.colors.red[600],
    },
    selectContainer: {
      fontSize: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        md: CUSTOM_FOUNDATION_TOKENS.font.size[14],
        lg: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      },
      fontWeight: {
        sm: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        md: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
        lg: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      },
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        focus: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        error: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
      borderRadius: {
        sm: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        md: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
        lg: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
      },
      boxShadow: 'none',
      padding: {
        x: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[12],
          md: CUSTOM_FOUNDATION_TOKENS.unit[12],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
        y: {
          sm: CUSTOM_FOUNDATION_TOKENS.unit[8],
          md: CUSTOM_FOUNDATION_TOKENS.unit[10],
          lg: CUSTOM_FOUNDATION_TOKENS.unit[12],
        },
      },
      border: {
        default: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
        hover: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[400]}`,
        focus: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.primary[500]}`,
        error: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.red[500]}`,
        disabled: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[200]}`,
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        hover: CUSTOM_FOUNDATION_TOKENS.colors.white,
        focus: CUSTOM_FOUNDATION_TOKENS.colors.white,
        error: CUSTOM_FOUNDATION_TOKENS.colors.white,
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
      },
    },
    menuContainer: {
      backgroundColor: CUSTOM_FOUNDATION_TOKENS.colors.white,
      borderRadius: CUSTOM_FOUNDATION_TOKENS.border.radius[6],
      border: `1px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      maxHeight: '300px',
    },
    menuItem: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      padding: {
        x: CUSTOM_FOUNDATION_TOKENS.unit[12],
        y: CUSTOM_FOUNDATION_TOKENS.unit[8],
      },
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[900],
        selected: CUSTOM_FOUNDATION_TOKENS.colors.primary[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        hover: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
        selected: CUSTOM_FOUNDATION_TOKENS.colors.primary[50],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.white,
      },
    },
  },
};

// ============================================================================
// SWITCH COMPONENT TOKENS
// ============================================================================
const SWITCH_TOKENS: SwitchComponentTokens = {
  sm: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[500],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    track: {
      width: '44px',
      height: '24px',
      borderRadius: CUSTOM_FOUNDATION_TOKENS.border.radius[12],
      backgroundColor: {
        checked: CUSTOM_FOUNDATION_TOKENS.colors.primary[500],
        unchecked: CUSTOM_FOUNDATION_TOKENS.colors.gray[300],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[200],
      },
    },
    thumb: {
      width: '20px',
      height: '20px',
      backgroundColor: CUSTOM_FOUNDATION_TOKENS.colors.white,
    },
  },
  md: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[500],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    track: {
      width: '44px',
      height: '24px',
      borderRadius: CUSTOM_FOUNDATION_TOKENS.border.radius[12],
      backgroundColor: {
        checked: CUSTOM_FOUNDATION_TOKENS.colors.primary[500],
        unchecked: CUSTOM_FOUNDATION_TOKENS.colors.gray[300],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[200],
      },
    },
    thumb: {
      width: '20px',
      height: '20px',
      backgroundColor: CUSTOM_FOUNDATION_TOKENS.colors.white,
    },
  },
  lg: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[500],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    track: {
      width: '44px',
      height: '24px',
      borderRadius: CUSTOM_FOUNDATION_TOKENS.border.radius[12],
      backgroundColor: {
        checked: CUSTOM_FOUNDATION_TOKENS.colors.primary[500],
        unchecked: CUSTOM_FOUNDATION_TOKENS.colors.gray[300],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[200],
      },
    },
    thumb: {
      width: '20px',
      height: '20px',
      backgroundColor: CUSTOM_FOUNDATION_TOKENS.colors.white,
    },
  },
};

// ============================================================================
// RADIO COMPONENT TOKENS
// ============================================================================
const RADIO_TOKENS: RadioComponentTokens = {
  sm: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    radio: {
      width: '20px',
      height: '20px',
      borderRadius: CUSTOM_FOUNDATION_TOKENS.border.radius.round,
      border: {
        default: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
        checked: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.primary[500]}`,
        disabled: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[200]}`,
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        checked: CUSTOM_FOUNDATION_TOKENS.colors.white,
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
      },
      dot: {
        width: '10px',
        height: '10px',
        backgroundColor: CUSTOM_FOUNDATION_TOKENS.colors.primary[500],
      },
    },
  },
  md: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    radio: {
      width: '20px',
      height: '20px',
      borderRadius: CUSTOM_FOUNDATION_TOKENS.border.radius.round,
      border: {
        default: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
        checked: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.primary[500]}`,
        disabled: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[200]}`,
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        checked: CUSTOM_FOUNDATION_TOKENS.colors.white,
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
      },
      dot: {
        width: '10px',
        height: '10px',
        backgroundColor: CUSTOM_FOUNDATION_TOKENS.colors.primary[500],
      },
    },
  },
  lg: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    radio: {
      width: '20px',
      height: '20px',
      borderRadius: CUSTOM_FOUNDATION_TOKENS.border.radius.round,
      border: {
        default: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
        checked: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.primary[500]}`,
        disabled: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[200]}`,
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        checked: CUSTOM_FOUNDATION_TOKENS.colors.white,
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
      },
      dot: {
        width: '10px',
        height: '10px',
        backgroundColor: CUSTOM_FOUNDATION_TOKENS.colors.primary[500],
      },
    },
  },
};

// ============================================================================
// CHECKBOX COMPONENT TOKENS
// ============================================================================
const CHECKBOX_TOKENS: CheckboxComponentTokens = {
  sm: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    checkbox: {
      width: '20px',
      height: '20px',
      borderRadius: CUSTOM_FOUNDATION_TOKENS.border.radius[4],
      border: {
        default: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
        checked: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.primary[500]}`,
        disabled: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[200]}`,
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        checked: CUSTOM_FOUNDATION_TOKENS.colors.primary[500],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
      },
      checkmark: {
        color: CUSTOM_FOUNDATION_TOKENS.colors.white,
      },
    },
  },
  md: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    checkbox: {
      width: '20px',
      height: '20px',
      borderRadius: CUSTOM_FOUNDATION_TOKENS.border.radius[4],
      border: {
        default: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
        checked: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.primary[500]}`,
        disabled: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[200]}`,
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        checked: CUSTOM_FOUNDATION_TOKENS.colors.primary[500],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
      },
      checkmark: {
        color: CUSTOM_FOUNDATION_TOKENS.colors.white,
      },
    },
  },
  lg: {
    gap: CUSTOM_FOUNDATION_TOKENS.unit[8],
    label: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[14],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[700],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    subLabel: {
      fontSize: CUSTOM_FOUNDATION_TOKENS.font.size[12],
      fontWeight: CUSTOM_FOUNDATION_TOKENS.font.weight[400],
      color: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.gray[600],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[400],
      },
    },
    checkbox: {
      width: '20px',
      height: '20px',
      borderRadius: CUSTOM_FOUNDATION_TOKENS.border.radius[4],
      border: {
        default: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[300]}`,
        checked: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.primary[500]}`,
        disabled: `2px solid ${CUSTOM_FOUNDATION_TOKENS.colors.gray[200]}`,
      },
      backgroundColor: {
        default: CUSTOM_FOUNDATION_TOKENS.colors.white,
        checked: CUSTOM_FOUNDATION_TOKENS.colors.primary[500],
        disabled: CUSTOM_FOUNDATION_TOKENS.colors.gray[100],
      },
      checkmark: {
        color: CUSTOM_FOUNDATION_TOKENS.colors.white,
      },
    },
  },
};

// ============================================================================
// EXPORT COMPONENT TOKENS
// ============================================================================
// Only exporting TEXT_INPUT and TEXT_AREA to fix white background issue
// Other components use default tokens to prevent crashes
export const CUSTOM_COMPONENT_TOKENS = {
  TEXT_INPUT: TEXT_INPUT_TOKENS,
  TEXT_AREA: TEXT_AREA_TOKENS,
};
