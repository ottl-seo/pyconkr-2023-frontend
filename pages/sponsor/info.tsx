import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useSetRecoilState } from 'recoil';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { sponsorState } from '@/stores';
import { styled } from 'stitches.config';
import NavBar from '@/components/NavBar';
import { H3 } from '@/components/heading';
import type { SponsorInputInfo } from '@types';
import Button from '@/components/common/Button';
import SimpleInput from '@/components/SimpleInput';
import { isCurrentTypeValid, validateChecker } from 'utils';
import { Progressbar } from '@/components/common/Progressbar';

const ContentWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 8,
});

const ButtonWrapper = styled('div', {
  display: 'flex',
  gap: 20,
  marginTop: 50,
  marginBottom: 40,
});

const LinkButton = styled(Button, {
  flex: 1,
});

const SponsorInfoForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

const SponsorInfoPage: NextPage = () => {
  const {
    control,
    formState: { errors, dirtyFields, isValid },
    trigger,
    setFocus,
    resetField,
    handleSubmit,
  } = useForm<SponsorInputInfo>();
  const setSponsorState = useSetRecoilState(sponsorState);

  const onSubmitSponsorInfo: SubmitHandler<SponsorInputInfo> =
    React.useCallback(
      (data) => {
        setSponsorState((prev) => ({ ...prev, ...data }));
      },
      [setSponsorState]
    );

  const handleValidForm = React.useCallback(
    (formKey: keyof SponsorInputInfo) => {
      trigger(formKey);
    },
    [trigger]
  );

  const handleClickResetIcon = React.useCallback(
    (formKey: keyof SponsorInputInfo) => {
      resetField(formKey);
      setFocus(formKey);
    },
    [resetField, setFocus]
  );

  return (
    <main>
      <Head>
        <title>Sponsor | 정보 입력</title>
      </Head>
      <NavBar />
      <ContentWrapper>
        <Progressbar value={3} />
        <H3
          style={{ whiteSpace: 'pre-line', marginTop: 24, marginBottom: 16 }}
        >{`후원사 정보를\n입력해주세요`}</H3>
        <SponsorInfoForm onSubmit={handleSubmit(onSubmitSponsorInfo)}>
          <Controller
            name="name"
            defaultValue=""
            control={control}
            rules={validateChecker('name')}
            render={({ field }) => (
              <SimpleInput
                {...field}
                label="후원사 명"
                length="fullWidth"
                isValid={isCurrentTypeValid(dirtyFields.name, 'name', errors)}
                isDirty={dirtyFields.name}
                onReset={() => handleClickResetIcon('name')}
                onBlur={() => handleValidForm('name')}
                required
              />
            )}
          />
          <Controller
            name="managerName"
            defaultValue=""
            control={control}
            rules={validateChecker('managerName')}
            render={({ field }) => (
              <SimpleInput
                {...field}
                label="담당자 이름"
                length="fullWidth"
                isValid={isCurrentTypeValid(
                  dirtyFields.managerName,
                  'managerName',
                  errors
                )}
                isDirty={dirtyFields.managerName}
                onReset={() => handleClickResetIcon('managerName')}
                onBlur={() => handleValidForm('managerName')}
                required
              />
            )}
          />
          <Controller
            name="managerTel"
            defaultValue=""
            control={control}
            rules={validateChecker('phone')}
            render={({ field }) => (
              <SimpleInput
                {...field}
                label="담당자 연락처"
                length="fullWidth"
                isValid={isCurrentTypeValid(
                  dirtyFields.managerTel,
                  'managerTel',
                  errors
                )}
                isDirty={dirtyFields.managerTel}
                onReset={() => handleClickResetIcon('managerTel')}
                onBlur={() => handleValidForm('managerTel')}
                required
              />
            )}
          />
          <Controller
            name="managerEmail"
            defaultValue=""
            control={control}
            rules={validateChecker('managerEmail')}
            render={({ field }) => (
              <SimpleInput
                {...field}
                type="email"
                label="담당자 이메일"
                length="fullWidth"
                isValid={isCurrentTypeValid(
                  dirtyFields.managerEmail,
                  'managerEmail',
                  errors
                )}
                isDirty={dirtyFields.managerEmail}
                onReset={() => handleClickResetIcon('managerEmail')}
                onBlur={() => handleValidForm('managerEmail')}
                required
              />
            )}
          />
          {/* TODO: route에 따라 연동 */}
          <ButtonWrapper>
            <LinkButton type="button">이전으로</LinkButton>
            <LinkButton type="submit" disabled={!isValid}>
              다음으로
            </LinkButton>
          </ButtonWrapper>
        </SponsorInfoForm>
      </ContentWrapper>
    </main>
  );
};

export default SponsorInfoPage;
