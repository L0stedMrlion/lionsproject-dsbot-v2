import discord
from discord.ext import commands
import discord.ext.commands.errors as discord_errors

# Hot-Reload ext.
import importlib
import sys

bot = commands.Bot(command_prefix='!')

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user.name}')
    await bot.change_presence(activity=discord.Activity(type=discord.ActivityType.watching, name="🦁 Lion's Project"))

@bot.command()
async def hello(ctx):
    await ctx.send("Hello, I'm your bot!")

def reload_extension(ctx, extension_name):
    try:
        bot.reload_extension(extension_name)
        return f'Reloaded {extension_name}'
    except Exception as e:
        return f'Failed to reload {extension_name}: {e}'

initial_extensions = ['cogs.example'] 

if __name__ == '__main__':
    for extension in initial_extensions:
        bot.load_extension(extension)

    while True:
        try:
            bot.run('TOKEN_GITHUB')
        except discord_errors.LoginFailure:
            print("Invalid bot token. Please check your token.")
            sys.exit(1)
        except KeyboardInterrupt:
            sys.exit(0)
        except Exception as e:
            print(f"An error occurred: {e}")
            print("Attempting to restart the bot...")
            # Attempt to reload the bot's extensions and restart
            for extension in initial_extensions:
                print(reload_extension(None, extension))
