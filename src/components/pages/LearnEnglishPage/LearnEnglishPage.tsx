import { FC } from 'react';
import { Pane } from '@c/atoms/Pane';
import { ExternalLink } from '@c/atoms/ExternalLink';
import { InternalLink } from '@c/atoms/InternalLink';
import { Section } from '@c/atoms/Section';
import SectionTitle from '@c/atoms/SectionTitle';
import { Mark } from '@c/atoms/Mark';
import { List } from '@c/atoms/List';
import { Item } from '@c/atoms/Item';

export interface Props {}

export const LearnEnglishPage: FC<Props> = () => (
  <main>
    <div className='container mx-auto px-8 md:px-16 lg:px-32 my-8 space-y-12 md:space-y-24'>
      <h1 className='text-5xl font-bold my-4'>英語の勉強方法</h1>

      <Section id='必要な英語力' className='clear-both'>
        <SectionTitle id='必要な英語力'>必要な英語力</SectionTitle>
        <Pane>
          <div className='space-y-4'>
            <p>
              日本の義務教育を受けただけで英語を話せるようになる人が皆無であることから分かるように、普通の高校レベルの英語ではアメリカの大学では全く通用しません。
              センター試験の英語で9割取れるような
              <Mark>
                優等生でもTOEFLなどのテストで入学基準を満たすのは無理でしょう
              </Mark>
              。
              高校までの単語力は文法が理解できていることを前提に、入学基準を満たすためにより実用的な英語の勉強が必要です。
            </p>

            <p>
              TOEFLなどのテストでは以下のの4つのカテゴリーで英語力が測られます。
            </p>

            <List>
              <Item>Reading</Item>
              <Item>Writing</Item>
              <Item>Speaking</Item>
              <Item>Listening</Item>
            </List>

            <p>
              SpeakingとListeningは慣れなので、アメリカの英語学校に行くなどで英語の環境に3~6ヶ月もいれば誰でも慣れてスコアも上がります。
              しかし、ReadingとWritingは英語の環境にいるだけでは伸びないので、真面目に勉強したかどうかで伸び幅に差が生まれます。
              英語学校に入学しつつ、真面目に勉強するというのが一般的な方法です。
            </p>
          </div>
        </Pane>
      </Section>

      <Section id='英語学校' className='clear-both'>
        <SectionTitle id='英語学校'>英語学校</SectionTitle>
        <Pane className='space-y-8'>
          <div>
            <h3 className='mb-4 text-xl font-bold'>
              <ExternalLink href='https://www.mikunijapan.org'>
                みくに国際学園
              </ExternalLink>
            </h3>
            <p>
              元BYU教授によって設立された英語学校です。
              新潟県南魚沼郡湯沢町で英語だけで共同生活をしながら英語を学びます。
              オンラインのコースも用意されています。
            </p>
          </div>

          <div>
            <h3 className='mb-4 text-xl font-bold'>
              <ExternalLink href='https://elc.byu.edu/home/program-description-japanese/'>
                English Language Center(ELC)
              </ExternalLink>
            </h3>
            <p>
              BYUの運営する英語学校です。
              BYUのTESOLの大学院生もしくは大学院卒業生が英語を教えてくれます。
              ELCの生徒はBYUの施設を一部使用できますが、BYUの生徒ではありません。
            </p>
          </div>

          <div>
            <h3 className='mb-4 text-xl font-bold'>
              <ExternalLink href='https://elc.byu.edu/home/program-description-japanese/'>
                Selnate International School
              </ExternalLink>
            </h3>
            <p>BYUの近くにある英語学校です。 BYUとは提携していません。</p>
          </div>

          <div>
            <h3 className='mb-4 text-xl font-bold'>
              <ExternalLink href='https://www.byuh.edu'>
                Brigham Young University–Hawaii
              </ExternalLink>
            </h3>
            <p>
              BYUHは英語学校ではありませんが、英検で入学ができることと、English
              as an International
              Language(EIL)という留学生向けの英語のクラスがあることを考えると、英語学校を内包した大学と言えるでしょう。
              初めのうちははEILクラスを多めに取り、徐々に普通科目を増やしていくという流れになっています。
              BYUHについて詳しくは
              <InternalLink href='/byuh' className='text-indigo-500 font-bold'>
                こちら
              </InternalLink>
              。
            </p>
          </div>
        </Pane>
      </Section>
    </div>
  </main>
);
