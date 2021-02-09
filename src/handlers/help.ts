import { Composer } from 'telegraf';
import { addToQueue } from '../tgcalls';

export const playHandler = Composer.command('help', async ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        await ctx.reply('🔸මෙම bot ඔබගේ group එකට add කරන්න.
🔸bot ව Admin කෙනෙක් කරන්න.(Remain Anonymous හැර සියලු permissions ලබා දෙන්න.
🔸දැන් group එක තුල /play <space> <අදාල youtube Link එක දාන්න>.
Enjoy..❕');
        return;
    }
