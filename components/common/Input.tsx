import React from 'react';
import { styled } from '../../stitches.config';
import { useForm, SubmitHandler } from 'react-hook-form';
import { H4 } from '../heading';

const InputArea = styled('form', {
    padding: '1rem',
});

const Label = styled('label', {
    padding: '1rem',
});

const StyledInput = styled('input', {
    boxSizing: 'border-box',
    alignItems: 'center',
    display: 'flex',
    padding: '1rem',
    gap: '0.5rem',
    width: '20rem',
    height: '4rem',
    fontSize: '1.25rem',
    variants: {
        size: {
            small: {
                width: '20rem',
            },
            big: {
                width: '30rem',
            },
        },
        invalid: {
          true: {
            border: '2px solid #BE3455',
            color: '#BE3455',
          },
          false: {
            border: '2px solid #F8F8F8',
          }
        }
      },
    
      defaultVariants: {
        size: "small",
        invalid: false,
      }
});

const actionList = {
    email: {
        required: "이메일은 필수 입력입니다.",
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: "이메일 형식에 맞지 않습니다."
        }
    }, 
    password: {
        required: "비밀번호는 필수 입력입니다.",
        minLength: {
            value: 8,
            message: "8자리 이상 비밀번호를 사용하세요."
        }
    },
    text: {
        required: "이 항목은 필수 입력입니다.",
    }
   };

// interface with all input props
interface InputProps {
    type?: 'text' | 'email' | 'password';
    size?: 'small' | 'big';
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    errors?: any;
};

const Input = ({
    type = 'text', 
    size = 'small',
    label,
    placeholder,
    disabled = false,
    ...props
    }: InputProps) => {
        const { register, handleSubmit, watch, formState: { errors, isDirty, isSubmitting } } = useForm<InputProps>({
            mode: "onBlur"
          });
        const onSubmitHandler: SubmitHandler<InputProps> = async(data) => {
            await new Promise((r) => setTimeout(r, 1000));
            console.log(errors);
        };

        return (
        <InputArea onSubmit={handleSubmit(onSubmitHandler)}>
            <Label htmlFor={type}>
                <H4>{label}</H4>
            </Label>
            <StyledInput
                id={type}
                type={type}
                placeholder={placeholder}
                aria-invalid={!isDirty ? undefined : errors[type] ? 'true' : 'false'}
                invalid={errors[type] ? true : false}
                {...register(type, actionList[type])}
                {...props}
            />
            <button type="submit" disabled={isSubmitting}>GO</button>
        </InputArea>
        );
    
}

export default Input;